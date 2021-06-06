// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open(
//   "GET",
//   "api.openweathermap.org/data/2.5/weather?zip=40272,us&appid=2d9651b1be701fed8c2bd7ff1ba80c17",
//   true
// );

// request.onload = function () {
//   // Begin accessing JSON data here
// };

// // Send request
// request.send();

// axios
//   .get(
//     "api.openweathermap.org/data/2.5/weather?zip=40272,us&appid=2d9651b1be701fed8c2bd7ff1ba80c17"
//   )
//   .then((response) => {
//     console.log(response.data);

//     document.getElementById("api-test").innerHTML = response.data;
//   });

function showInput() {
  document.getElementById("display").innerHTML =
    document.getElementById("zip").value;
  zipCode = document.getElementById("zip").value;
  console.log(zipCode);

  var request = new XMLHttpRequest();

  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zipCode +
      ",us&units=imperial&appid=2d9651b1be701fed8c2bd7ff1ba80c17",
    true
  );
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);

    document.getElementById("location").innerHTML = "City: " + data.name;
    document.getElementById("temp").innerHTML =
      "Current Temperature: " + data.main.temp + "&deg; F";
    // temperature = data.main.temp;
    // if (temperature > 85) {
    //   document.getElementById("temp-exerpt").innerHTML =
    //     "It is a little warm to have the windows open. I would suggest wearing something cool out.";
    // }
    // if (temperature < 85 && temperature > 65) {
    //   document.getElementById("text-exerpt").innerHTML =
    //     "It is pretty nice out right now! I would suggest opening the windows.";
    // }
    // if (temperature < 65) {
    //   document.getElementById("text-exerpt").innerHTML =
    //     "It is a little chilly out. Make sure the heat is on and wear something warm out.";
    // }
    document.getElementById("feelsLike").innerHTML =
      "Feels Like: " + data.main.feels_like + "&deg; F";
    document.getElementById("minTemp").innerHTML =
      "Minimum Temperature: " + data.main.temp_min + "&deg; F";
    document.getElementById("maxTemp").innerHTML =
      "Maximum Temperature: " + data.main.temp_max + "&deg; F";
    document.getElementById("condition").innerHTML =
      "Condition: " + data.weather[0].description;
    document.getElementById("pressure").innerHTML =
      "Pressure: " + data.main.pressure + " hPa";
    document.getElementById("humidity").innerHTML =
      "Humidity: " + data.main.humidity + "%";
    document.getElementById("windspeed").innerHTML =
      "Windspeed: " + data.wind.speed + "mph";
    document.getElementById("windgust").innerHTML =
      "Wind Gust Speed: " + data.wind.gust + "mph";
    console.log(data.weather[0].icon);
    let icon = data.weather[0].icon;
    let iconimg = "http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("icon1").scr = "'" + iconimg + "'";
  };

  request.send();
}
