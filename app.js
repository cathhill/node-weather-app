const request = require("request");

/* const url =
  "http://api.weatherstack.com/current?access_key=b47ae6e976872c6c13ce18b07fb7564d&query=37.8267,-122.4233&units=m";

//json:true parses the data.
request({ url: url, json: true }, (error, response) => {
  //   console.log(response.body.current);
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is " +
      response.body.current.temperature +
      " degrees and feels like " +
      response.body.current.feelslike +
      " degrees."
  );
}); */

const geocoding =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2F0aDIxIiwiYSI6ImNrdGtqaXFkMTAxdnYyb28zNWhkZHZ4cnYifQ.fOFq2ACp6bdmpqVipz3OSA&limit=1";

request({ url: geocoding, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log("Latitude = " + latitude + " and longitude = " + longitude);
});
