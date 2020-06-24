if(navigator.geolocation) {
  this.getPosition()
    .then((position) => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    })
    .catch((err) => {
      this.getWeather(49.2827, 123.1207);
      alert("You have disabled location service");
    });
} else {
  alert("Geolocation not available");
}
