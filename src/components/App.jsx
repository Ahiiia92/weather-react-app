import React, { Component } from 'react';

// import './currentLocation';
import apiKeys from '../apiKeys';

class App extends Component {
  // getWeather = async (lat, lon) => {
  //   const api_call = await fetch(
  //     `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
  //   );
  //   const data = await api_call.json();
  //   this.setState({
  //     lat: lat,
  //     lon: lon,
  //     city: data.name,
  //     temperatureC: Math.round(data.main.temp),
  //     humidity: data.main.humidity,
  //     country: data.sys.country,
  //   });
  // };

  render() {
    return (
      <div className='container'>
        <div id="location">
          <div className="title">
            <h2>CITY</h2>
            <p>COUNTRY</p>
          </div>
          <div className="date-time">
            <div className="day">
              <div className="date"> Mercredi blabla</div>
              <div className="time">13:30</div>
            </div>
            <div className="temperature">25°C</div>
          </div>
          <div id="forecast">
            <div className="forecast-icon"></div>
            <div className="today-weather">
              <h3>SOLEIL</h3>
              <div className="search-box"></div>
              <ul className="forecast-results">
                <li>temp</li>
                <li>hum</li>
                <li>visibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
