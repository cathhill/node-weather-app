const request = require("request");
const geocode = require("./utils/geocode");

/* const url =
  "http://api.weatherstack.com/current?access_key=b47ae6e976872c6c13ce18b07fb7564d&query=37.8267,-122.4233&units=m";

//json:true parses the data.
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location.");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is " +
        response.body.current.temperature +
        " degrees and feels like " +
        response.body.current.feelslike +
        " degrees."
    );
  }
}); */

/* const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2F0aDIxIiwiYSI6ImNrdGtqaXFkMTAxdnYyb28zNWhkZHZ4cnYifQ.fOFq2ACp6bdmpqVipz3OSA&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log("Latitude = " + latitude + " and longitude = " + longitude);
  }
}); */

// callback often takes two arguments: error and data. Only one of these will have a value, the other will be undefined.
geocode("Philadelphia", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
