export function ActivityListItem({ activity, handleDeleteActivity }) {
  console.log(activity);
  return (
    <li className="list-item">
      <p>{activity.name}</p>
      <button type="button" onClick={() => handleDeleteActivity(activity)}>
        x
      </button>
    </li>
  );
}
