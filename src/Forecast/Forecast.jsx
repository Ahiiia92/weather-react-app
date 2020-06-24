import React, { useState } from 'react';

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  function getForecast() {
    fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02")
      .then(response => response.json())
      .then(response => {
        setResponseObj(response)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>
        {JSON.stringify(responseObj)}
      </div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
}

export default Forecast;
