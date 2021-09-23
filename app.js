const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

// !address = if no address is given
if (!address) {
  console.log("Please provide an address");
} else {
  // callback often takes two arguments: error and data. Only one of these will have a value, the other will be undefined.
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    //return only returns one thing and then stops running, so the forecast data won't show if there is a geocode error.

    // forecastData comes from geocode function. Can't be called data as prevents getting 'data' from geocode above.
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
