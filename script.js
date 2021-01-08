// search-city
// search-button
// selected-weather
// current-city
// temp
// humidity
// wind
// uv
// weather-future

// assign variables// 
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var selectedWeather = $("#selected-weather");
var currentCity = $("#current-city");
var currentTemp = $("#temp");
var currentHumidity = $("#humidity");
var currentWind = $("#wind");
var weatherFuture = $("#weather-future");

var city = "";

var Cities = [];

function find(place) {
    for (var i = 0; i < Cities.length; i++) {
        if (place.toUpperCase() === Cities[i]) {
            return -1;
        }
    }
    return 1;
}

// API Key goes here //
var APIkey = "259210c99a8f0d57388d317f98069395";

function searchWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
        city = searchCity.val().trim();
        currentWeather(city);

    }
}

function currentWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather"
}








