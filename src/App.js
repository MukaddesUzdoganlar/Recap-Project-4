import React, { useState } from "react";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (newActivity) => {
    setActivities((prevActivities) => [
      ...prevActivities,
      { id: generateUniqueId(), ...newActivity },
    ]);
  };

  const generateUniqueId = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="App">
      <h1>Activity Tracker</h1>
      <Form onAddActivity={handleAddActivity} />
      {}
    </div>
  );
}

export default App;
