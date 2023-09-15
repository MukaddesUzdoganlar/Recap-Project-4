import React, { useState, useRef } from "react";

function Form({ onAddActivity }) {
  const [formData, setFormData] = useState({
    name: "",
    isForGoodWeather: false,
  });

  const nameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract form data
    const { name, isForGoodWeather } = formData;

    onAddActivity({
      name,
      isForGoodWeather,
    });

    setFormData({ name: "", isForGoodWeather: false });
    nameInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <div>
        <label htmlFor="name">Name of Activity:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          ref={nameInputRef}
          required
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            checked={formData.isForGoodWeather}
            onChange={handleInputChange}
          />{" "}
          Good Weather Activity
        </label>
      </div>
      <div>
        <button type="submit">Add Activity</button>
      </div>
    </form>
  );
}

export default Form;
