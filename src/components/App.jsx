import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';

// import './currentLocation';
import apiKeys from '../apiKeys';
import SearchBar from './search_bar';
import Location from './currentLocation';

const api_key = process.env.OPENWEATHER_API_KEY
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "lat",
      lon: "lon",
      city: "Vancouver",
      temperatureC: "25°C",
      humidity: "75%",
      country: "CA"
    };
  }

  componentDidMount() {
    const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=1e6eb1521c14c5ae5a3ec388a513e4fb`

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })

    // getWeather = async (lat, lon) => {
    //   const api_call = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${api_key}`
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
  }

  // search = (city) => {
  //   axios
  //     .get(
  //       `${apiKeys.base}weather?q=${
  //       city != "[object Object]" ? city : query
  //       }&units=metric&APPID=${apiKeys.key}`
  //     )
  //     .then((response) => {
  //       setWeather(response.data);
  //       setQuery("");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setWeather("");
  //       setQuery("");
  //       setError({ message: "Not Found", query: query });
  //     });
  // };

  render() {
    return (
      <div className="container">
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
        </div>
        <div id="forecast">
          <div className="forecast-icon"></div>
          <div className="today-weather">
            <ReactWeather
              forecast="today"
              apikey="1e6eb1521c14c5ae5a3ec388a513e4fb"
              type="city"
              city="Berlin"
            />
            <h3>SOLEIL</h3>
            <div className="search-box">
              <SearchBar searchFunction={this.search} />
              <SearchBar getWeather={this.getWeather} />
            </div>
            <Location />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
