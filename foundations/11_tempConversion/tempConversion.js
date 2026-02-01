const convertToCelsius = function(fahr) {
  // return ((fahr - 32) / (5/9)).toFixed(1);
  return Math.round(((fahr - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(cels) {
  // return (cels * (9/5) + 32).toFixed(1);
  return Math.round((cels * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};