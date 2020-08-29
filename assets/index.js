$(document).ready(function() {
    var apiKey ="4433f9ce3541f52b1304b046cb63c26d";
   // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    $("#weatherButton").on("click", function(){
        var cityName = $("#city").val();
        console.log(cityName)
        weatherSearch(cityName);
        // forecastSearch(cityName);
        $("#city").val("");
    });
    // function forecastSearch(city){
    // $.ajax({
    //     url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial",
    //     method: "GET"
    // }).then(function(response){
    //     console.log(response)
    //     //build out responses and append to forecast div on front end
    //     weatherForecast(response.q)
    //     var title=$("<h3>").text(response.name);
    // });

    // };
    function weatherSearch(city){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            uvIndex(response.coord.lat, response.coord.lon)
            var title=$("<h3>").text(response.name);
            // current temp
            var currentTemp=$("<p>").text("Current Temperature: " + response.main.temp);
            // humidity level
            var humidityLevel=$("<p>").text("Humidity Level: " + response.main.humidity);
            // wind speed
            var windSpeed=$("<p>").text("Wind Speed: " + response.wind.speed);
            // low temp
            var lowTemp=$("<p>").text("Min Temperature: " + response.main.temp_min);
            // high temp
            var highTemp=$("<p>").text("Max Temperature: " + response.main.temp_max);
            // append to front end
            $("#weather-current").append(title, currentTemp, humidityLevel, windSpeed, lowTemp, highTemp);
            // cb for forecast function (weatherSearch)

        })
    }
    function uvIndex(lat, lon){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            var uv=$("<p>").text("UV Index: "+ response.value);
            $("#weather-current").append(uv);
        });
    }
});
