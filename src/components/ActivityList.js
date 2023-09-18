import { ActivityListItem } from "./ActivityListItem";

export function ActivityList({ activities, handleDeleteActivity, weather }) {
  console.log(activities);
  return (
    <section>
      {weather.isGoodWeather ? (
        <ul className="list">
          {activities
            .filter((activity) => activity.isForGoodWeather)
            .map((activity) => (
              <ActivityListItem
                activity={activity}
                key={activity.id}
                handleDeleteActivity={handleDeleteActivity}
              />
            ))}
        </ul>
      ) : (
        <ul className="list">
          {activities
            .filter((activity) => !activity.isForGoodWeather)
            .map((activity) => (
              <ActivityListItem
                activity={activity}
                key={activity.id}
                handleDeleteActivity={handleDeleteActivity}
              />
            ))}
        </ul>
      )}
    </section>
  );
}
