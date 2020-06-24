import React, { Component } from 'react';

class Location extends Component {
//   if(navigator.geolocation) {
//     this.getPosition()
//       .then((position) => {
//         this.getWeather(position.coords.latitude, position.coords.longitude);
//       })
//       .catch((err) => {
//         this.getWeather(49.2827, 123.1207);
//         alert("You have disabled location service");
//       });
//   } else {
//   alert("Geolocation not available");
// }
  render() {
    return (
      <ul className="forecast-results">
        <li>Temperature - {this.props.temperatureC}</li>
        <li>Humidity - {this.props.humidity}</li>
        <li>Visibility - </li>
      </ul>
    );
  }
}


export default Location;
