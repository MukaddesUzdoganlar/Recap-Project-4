import React, { useEffect, useState } from "react";
import { uid } from "uid";
import { Form } from "./components/Form";
import { List } from "./components/List";

import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/weather";

export default function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const setActivities =
      useLocalStorageState.getWeatherInformation("activities");
    if (setActivities) {
      setActivities(JSON.parse(setActivities));
    }
  }, []);

  useEffect(() => {
    useLocalStorageState.setActivities(
      "activities",
      JSON.stringify(activities)
    );
  }, [activities]);

  async function getWeatherInformation() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }
  getWeatherInformation();

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [
      ...prevActivities,
      { id: uid(), ...newActivity },
    ]);
  };

  uid();

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === setWeather
  );

  return (
    <div className="App">
      <h1>Add new Activity:</h1>
      <Form onAddActivity={handleAddActivity} />
      <button
        onClick={() => setWeather((prev) => !prev)}
        className="toggle-weather-button"
      >
        Change Weather
      </button>
      <List activities={filteredActivities} isGoodWeather={weather} />
    </div>
  );
}
