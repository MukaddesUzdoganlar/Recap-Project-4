export function Form({ handleSubmit }) {
  return (
    <section>
      <h2 className="form-title">Add new activity</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            className="input-name"
            type="text"
            id="name"
            placeholder="Activity"
            name="name"
          ></input>
        </div>
        <div className="form-div">
          <label htmlFor="activity">Good Weather Activity</label>
          <input type="checkbox" id="activity" name="isChecked"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
