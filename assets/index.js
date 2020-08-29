$(document).ready(function() {
    var apiKey ="4433f9ce3541f52b1304b046cb63c26d";
   // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    $("#weatherButton").on("click", function(){
        var cityName = $("#city").val();
        console.log(cityName)
        weatherSearch(cityName);
        $("#city").val("");
    });
    function forecastSearch(city){
    console.log(city)
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial",
        method: "GET"
    }).then(function(response){
        console.log(response)
        //build out responses and append to forecast div on front end
    });

    };
    function weatherSearch(city){
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            method: "GET"
        }).then(function(response){
            console.log(response)
            uvIndex(response.coord.lat, response.coord.lon)
            var title=$("<h3>").text(response.name);
            // current temp
            // humidity level
            // wind speed
            // high temp
            // low temp

            $("#weather-current").append(title, );
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
