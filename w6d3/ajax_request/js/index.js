console.log("Hello from the JavaScript console!");

$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  type: 'GET',
  success: function(weatherData) {
    console.log(weatherData.weather[0].main + ": " + weatherData.weather[0].description);
  }
});

console.log("After Ajax request");
