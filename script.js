$("#citySearch").on("click", function(event) {
    event.preventDefault();
    
var citySrch = $("#citySearch").val().trim();
    cityWeatherSearch(citySrch);

function cityWeatherSearch(currentWeater) {
    // Quering OpenWeather api for wether data
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + name + "id=524901&APPID=0d199b71d13983573eefdb14a808d86a";

    //Perform Ajax request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#currentWeater-div").text(JSON.stringify(response));
        // Printing the entire object to console
        console.log();

        var weatherIndex = ["name", "temp", "humidity", "speed", "all"];
        var weatherData = JSON.parse(this.response);
        
        // // Constructiong HTML contaning the weather information
        var cityName = $("<h3>").text(response.city.id);
        var temp = $("<h4>").text(response.main.temp);
        var humidity = $("<h4>").text(response.main.humidity);
        var windSpeed = $("<h4>").text(response.wind.speed);
        var windSpeed = $("<h4>").text(response.wind.speed);
        var uvForcast = ("<h4>").text(response.wind.speed);
        document.getElementById("currentWeather-div").innerHTML = weatherIndex[index];

        $("#currentWeater-div").empty();
        $("#currentWeather-div").append(cityName, temp, humidity, windSpeed);
    });
}



   
});
