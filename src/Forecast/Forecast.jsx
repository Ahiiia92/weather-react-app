import React, { Component } from 'react';
import axios from 'axios';
import apiKeys from '../apiKeys';
import ReactAnimatedWeather from 'react-animated-weather';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      error: "",
      weather: {}
    }
  };

  // console.log("Hello from Forecast");

 search = (city) => {
      fetch(`${apiKeys.base}weather?q=${city}&units=metric&APPID=${apiKeys.key}`)
   console.log(`${apiKeys.base}weather?q=${city}&units=metric&APPID=${apiKeys.key}`)
      .then(response => response.json())
      .then((result) => {
        setQuery('');
        setWeather(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setWeather('');
        setQuery('');
        setError({ message: "Not Found", query: query });
      });
  };

  // handleSearch = () => {
  //   this.setState({
  //     query: "coucou",
  //   })
  // }


  // const defaults = {
  //   color: "white",
  //   size: 112,
  //   animate: true,
  // };

  // useEffect(() => {
  //   search("Delhi");
  // }, []);
render() {
  return (
    <div id="forecast">
      <div className="forecast-icon">
        {/* <ReactAnimatedWeather
          // icon={props.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        /> */}
        {/* <p>{props.main}</p> */}
      </div>
      <div className="today-weather">
        <h3 className="weather">{this.props.weather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(event) => this.setState({query: event.target.value})}
            // value={query}
            onKeyPress={this.search}
          />
        </div>
        <ul className="forecast-results">
          {/* {(typeof weather.main != "undefined") ? ( */}
            <div>
            {" "}
              <li>Temperature{" "} - 25°C (blabla)</li>
              <li>Humidity{" "} - 30%</li>
              <li>Visibility{" "} - 1 mi</li>
              <li>Wind Speed{" "} - 2 Km/h</li>
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
