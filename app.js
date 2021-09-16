const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// callback often takes two arguments: error and data. Only one of these will have a value, the other will be undefined.
geocode("Philadelphia", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(44.1545, -75.7088, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
