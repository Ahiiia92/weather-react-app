import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';

// import './currentLocation';
import SearchBar from './search_bar';
import WeatherLocation from './currentLocation';

const api = {
  key: "1e6eb1521c14c5ae5a3ec388a513e4fb",
  base: "https://api.openweathermap.org/data/2.5/"
}

const api_key = process.env.OPENWEATHER_API_KEY
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "49.2827",
      lon: "123.1207",
      city: "Vancouver",
      temperatureC: "25°C",
      humidity: "75%",
      country: "CA"
    };
  }

  search = (query) => {
    console.log(query);
  }

  dateBuilder = (d) => {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getUTCFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  render() {
    return (
      <div className="container">
        <div id="location">
          <div className="title">
            <h2>{this.state.city}</h2>
            <p>{this.state.country}</p>
          </div>
          <div className="date-time">
            <div className="day">
              <div className="date">{this.dateBuilder(new Date())}</div>
              <div className="time">13:30</div>
            </div>
            <div className="temperature">{this.state.temperatureC}</div>
          </div>
        </div>
        <div id="forecast">
          <div className="forecast-icon"></div>
          <div className="today-weather">
            <h3 className="weather">SOLEIL</h3>
            <div className="search-box">
              <SearchBar searchFunction={this.search} />
            </div>
              <WeatherLocation
                temperatureC={this.state.temperatureC}
                humidity={this.state.humidity}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
