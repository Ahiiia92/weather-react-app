import React, { Component } from 'react';
import axios from 'axios';
import apiKeys from '../apiKeys';
// import ReactAnimatedWeather from 'react-animated-weather';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      error: "",
      weather: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

 search = (query) => {
   const url = `${apiKeys.base}weather?q=Berlin&units=metric&APPID=${apiKeys.key}`;
   console.log(url);
   console.log(query);
      fetch(url)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          query: "",
          weather: {
            lat: result.coord.lat,
            lon: result.coord.lon,
            errorMessage: undefined,
            temperatureC: result.main.temp,
            city: result.name,
            country: result.sys.country,
            humidity: result.main.humidity,
            description: result.weather.main,
            icon: "CLEAR_DAY",
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset,
            wind: result.wind.speed
          }
        })
        console.log(result);
        console.log(result.main.temp);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          query: '',
          weather: '',
          error: "Not Found"
        })
      });
  };

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    console.log('typed enter');
    this.search();
    event.preventDefault();
    console.log('ran handleSubmit properly');
  }
  // const defaults = {
  //   icon: 'CLEAR_DAY',
  //   color: 'goldenrod',
  //   size: 512,
  //   animate: true
  // };

render() {
  return (
    <div id="forecast">
      <div className="forecast-icon">
        {/* <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        /> */}
        <p>{this.state.weather.main}</p>
      </div>
      <div className="today-weather">
        <h3 className="weather">{this.state.weather.city} - {this.state.weather.country}</h3>
        <div className="search-box">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search any city"
              onChange={this.handleChange}
              value={this.state.query}
            />
            <input type="submit" value="Submit" />
        </form>
        </div>
        <ul className="forecast-results">
          {/* {(typeof weather.main != "undefined") ? ( */}
            <div>
            {" "}
            <li>Temperature{" "} - {this.state.weather.temperatureC}°C</li>
            <li>Humidity{" "} - {this.state.weather.humidity}%</li>
            <li>Wind Speed{" "} - {this.state.weather.wind} Km/h</li>
            <li>Sunrise{" "} - {this.state.weather.sunrise}</li>
            <li>Sunset{" "} - {this.state.weather.sunset}</li>
            </div>
          {/* ) : (
            <li>
              {error.query} {error.message}
            </li>
          )} */}
        </ul>
      </div>
    </div>
  )};
};

export default Forecast;
