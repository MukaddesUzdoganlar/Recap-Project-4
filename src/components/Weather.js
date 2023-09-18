import cloudImage from "../../images/RainingWeather.jpg";
import sunImage from "../../images/SunnyWeather.jpg";

export function Weather({ weather }) {
  return (
    <section>
      <div className="section-weather">
        <h3 className="temperature">{weather.temperature}°</h3>
        {weather.isGoodWeather ? (
          <img src={sunImage} alt="sun" />
        ) : (
          <img src={cloudImage} alt="cloud" />
        )}
      </div>
      {weather.isGoodWeather ? (
        <p className="text">Don't forget your sun protection 😉!</p>
      ) : (
        <p className="text">Make a cozy day at home 🍵📖.</p>
      )}
    </section>
  );
}
