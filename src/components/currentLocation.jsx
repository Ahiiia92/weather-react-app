import React, { Component } from 'react';
import apiKeys from '../apiKeys';
import Clock from 'react-live-clock';
import Forecast from '../Forecast/Forecast';
// import loader from '../../assets/Spinner-1s-200px.gif';

const dateBuilder = (d) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getUTCFullYear();

  return `${day} ${date} ${month} ${year}`;
};

class Weather extends Component {
  constructor(props) {
    super(props),
    this.state = {
        lat: undefined,
        lon: undefined,
        errorMessage: undefined,
        temperatureC: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        sunrise: undefined,
        sunset: undefined,
        errorMsg: undefined
      };
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
      // if user allow location then it will fetch the location data and send it to getWeather function
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude);
        // console.log(position);
        })
      .catch((error) => {
        // if user didn't allow geolocation services then default one
        this.getWeather(28.67, 77.22);
        // console.log(error);
        alert(
          "You have disabled location service."
          );
      });
    } else {
      alert("Geolocation not available");
    }

    this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
  }

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getWeather = (lat, lon) => {
    const url_coor = `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`;
    // console.log(url_coor);
    fetch(url_coor)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        lat: lat,
        lon: lon,
        city: data.name,
        icon: "CLEAR_DAY",
        temperatureC: Math.round(data.main.temp),
        humidity: data.main.humidity,
        main: data.weather[0].main,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      })
  //   // switch (this.state.main) {
  //   //   case "Haze":
  //   //     this.setState({ icon: "CLEAR_DAY" });
  //   //     break;
  //   //   case "Clouds":
  //   //     this.setState({ icon: "CLOUDY" });
  //   //     break;
  //   //   case "Rain":
  //   //     this.setState({ icon: "RAIN" });
  //   //     break;
  //   //   case "Snow":
  //   //     this.setState({ icon: "SNOW" });
  //   //     break;
  //   //   case "Dust":
  //   //     this.setState({ icon: "WIND" });
  //   //     break;
  //   //   case "Drizzle":
  //   //     this.setState({ icon: "SLEET" });
  //   //     break;
  //   //   case "Fog":
  //   //     this.setState({ icon: "FOG" });
  //   //     break;
  //   //   case "Smoke":
  //   //     this.setState({ icon: "FOG" });
  //   //     break;
  //   //   case "Tornado":
  //   //     this.setState({ icon: "WIND" });
  //   //     break;
  //   //   default:
  //   //     this.setState({ icon: "CLEAR_DAY" });
  //   // }
      console.log('we are in the getWeather function. Weather Component');
      console.log(data);
    })
  };

  render() {
    return (
      <React.Fragment>
        <div id="location">
          <div className="title">
            <h2>{this.state.city}</h2>
            <p>{this.state.country}</p>
          </div>
          <div className="date-time">
            <div className="day">
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="time">
                {/* <Clock
                  format="HH:mm:ss" interval={1000} ticking={true}
                /> */}
              </div>
            </div>
            <div className="temperature">{this.state.temperatureC} °C</div>
          </div>
        </div>
       <Forecast />
      </React.Fragment>
      );
  };
}

export default Weather;
