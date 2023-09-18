import React, { useEffect, useState } from "react";
import uid from "uid";
import { Form } from "./components/Form";
import useLocalStorageState from "use-local-storage-state";
import { ActivityList } from "./components/ActivityList";

function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    const url = "https://example-apis.vercel.app/api/weather";

    async function fetchWeather() {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    let newData = {};

    if (data.isChecked) {
      newData = { ...data, isForGoodWeather: true, id: uid() };
    } else {
      newData = { ...data, isForGoodWeather: false, id: uid() };
    }

    setActivities([...activities, newData]);
    event.target.reset();
    event.target.name.focus();
  }

  function handleDeleteActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity.id !== activityToDelete.id)
    );
  }
  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <ActivityList
        activities={activities}
        handleDeleteActivity={handleDeleteActivity}
        weather={weather}
      />
    </div>
  );
}

export default App;
