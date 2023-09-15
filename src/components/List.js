import React from "react";

export default function List({ activities, isGoodWeather}) {
    return (
        <div>
            <h2>
                {isGoodWeather
                ? 'Good Weather Activities'
                : 'Bad Weather Activities'}
            </h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>
                {activity.name} -{''}
                {activity.isForGoodWeather
                ? 'Good Weather'
                : 'Bad Weather'}
                    </li>
                ))}
            </ul>
        </div>
    );
}