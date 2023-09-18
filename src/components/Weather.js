export function Weather({ weather }) {
  return (
    <section>
      <div className="section-weather">
        <h3 className="temperature">{weather.temperature}°</h3>
        {weather.isGoodWeather ? "🌞" : "🌧️"}
      </div>
      {weather.isGoodWeather ? (
        <p className="text">Don't forget your sun protection 😉!</p>
      ) : (
        <p className="text">Make a cozy day at home 🍵📖.</p>
      )}
    </section>
  );
}
