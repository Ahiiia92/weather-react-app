// External Libraries
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Internal Libraries
import apiKeys from '../apiKeys';
import '../fontawesome';
import Icons from './Icons';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      error: "",
      weather: {
        temperatureC: "-",
        city: "",
        country: "",
        humidity: "-",
        icon: "CLEAR_DAY",
        sunrise: "-",
        sunset: "-",
        wind: "-",
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 search = (query) => {
   console.log('Wea re in the search function');
   const url = `${apiKeys.base}weather?q=${query}&units=metric&APPID=${apiKeys.key}`;
   console.log('url of the api call');
   console.log(url);
   console.log('Query should be display');
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
           description: result.weather[0].description,
           main: result.weather[0].main,
           icon: "CLEAR_DAY",
           sunrise: result.sys.sunrise,
           sunset: result.sys.sunset,
           wind: result.wind.speed
         }
       });
       console.log('Result of the api call');
       console.log(result);
       console.log(result.main.temp);
     })
     .catch((error) => {
       console.log(error);
       this.setState({
         query: '',
         weather: '',
         error: "Not Found"
       });
     });
 };

 handleChange(event) {
   this.setState({ query: event.target.value });
 }

 handleSubmit(event) {
   console.log('HandleSubmit Function');
   console.log('typed enter key');
   this.search(this.state.query);
   event.preventDefault();
   console.log('Back to the handleSubmit Function');
   console.log('ran handleSubmit properly');
 }

  timeConvertor = (num) => {
    const date = new Date(num * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`;
    const secondes = `0${date.getSeconds()}`;

    const formattedTime = `${hours}:${minutes.substr(-2)}`;
    return formattedTime;
  }

  render() {
    return (
      <React.Fragment>
        <div id="forecast">
          <div className="forecast-icon">
            {/* <Icons /> */}
          </div>
          <div className="today-weather">
            {(typeof this.state.weather.description !== 'undefined') ? (
              <div>
                <h2 className="weather">
                  {this.state.weather.city}
                  {' '}
-
                  {' '}
                  {this.state.weather.country}
                </h2>
                <h3>{this.state.weather.main}</h3>
              </div>
            ) : (
              <h2 className="weather">Weather in...</h2>
            )}
            <div className="search-box">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search any city"
                  onChange={this.handleChange}
                  value={this.state.query}
                />
                <button
                  type="submit"
                  value="Submit"
                >
                  <FontAwesomeIcon
                    icon={['fas', 'search-location']}
                    style={{
                      fontSize: '2em'
                    }}
                  />
                </button>
              </form>
            </div>
            <ul className="forecast-results">
              {(typeof this.state.weather.description !== 'undefined') ? (
                <div>
                  <p>{this.state.weather.description}</p>
                  <div>
                    <li>
Temperature
                      {" "}
                      <span>
                        {this.state.weather.temperatureC}
                        {' '}
°C
                      </span>
                    </li>
                    <li>
Humidity
                      {" "}
                      <span>
                        {this.state.weather.humidity}
                        {' '}
%
                      </span>
                    </li>
                    <li>
Wind Speed
                      {" "}
                      <span>
                        {this.state.weather.wind}
                        {' '}
Km/h
                      </span>
                    </li>
                    <li>
Sunrise
                      {" "}
                      <span>{this.timeConvertor(this.state.weather.sunrise)}</span>
                    </li>
                    <li>
Sunset
                      {" "}
                      <span>{this.timeConvertor(this.state.weather.sunset)}</span>
                    </li>
                  </div>
                </div>
              ) : (
                <p />
              )}
            </ul>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Forecast;
