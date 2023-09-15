import React, { useEffect, useState } from "react";
import {uid} from "uid";
import { List } from "./components/List";
import { Form } from "./components/Form";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useState([]);
  const [isGoodWeather, setIsGoodWeather] = useState(true);

  useEffect(() => {
    const storedActivties = useLocalStorageState.getItem('activties');
    if (storedActivties) {
      setActivities(JSON.parse(storedActivties));
    }
  }, []);

useEffect(() => {
  useLocalStorageState.setItem('activities', JSON.stringify(activities));
}, [activities]);


  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [
      ...prevActivities,
      { id: uid(), ...newActivity },
    ]);
  };

  uid();

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <div className="App">
      <h1>Add new Activity:</h1>
      <form onAddActivity={handleAddActivity} />
      <button
      onClick={() => setIsGoodWeather((prev) => !prev)}
      className="toggle-weather-button"
      >
        Change Weather
      </button>
      <list activities={filteredActivities} isGoodWeather={isGoodWeather} />
    </div>
  );
}

export default App;
