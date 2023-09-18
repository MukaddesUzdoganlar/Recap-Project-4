export function ActivityListItem({ activity, handleDeleteActivity }) {
  return (
    <li className="list-item">
      <p>{activity.name}</p>
      <button type="button" onClick={() => handleDeleteActivity(activity)}>
        x
      </button>
    </li>
  );
}
