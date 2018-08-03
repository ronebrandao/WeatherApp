var WeatherSearcher = /** @class */ (function () {
    function WeatherSearcher() {
    }
    WeatherSearcher.prototype.searchWeatherByCity = function (name) {
        return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=b23f8f25d0cb302de470df7c83c1b30b")
            .then(function (response) {
            if (response.ok)
                return response.json();
            alert("The city " + name + " does not exists");
        }).catch(function (err) {
            console.log("An error has ocurred: ", err);
        });
    };
    WeatherSearcher.prototype.searchWeatherByCoordinates = function (latitude, longitude) {
        return fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=b23f8f25d0cb302de470df7c83c1b30b")
            .then(function (response) {
            if (response.ok)
                return response.json();
            alert("Something wrong happened, try again!");
        }).catch(function (err) {
            console.log("An error has ocurred: ", err);
        });
    };
    WeatherSearcher.prototype.bindData = function (dados) {
        document.getElementById("city-name").innerHTML = dados.name.toString();
        document.getElementById("icon").src = "http://openweathermap.org/img/w/" + dados.weather[0].icon + ".png";
        document.getElementById("temperature").innerHTML = this.convertTemp(dados.main.temp);
        document.getElementById("min-temp").innerHTML = "Min: " + this.convertTemp(dados.main.temp_min);
        document.getElementById("max-temp").innerHTML = "Max: " + this.convertTemp(dados.main.temp_max);
        document.getElementById("description").innerHTML = dados.weather[0].description;
        document.getElementById("wind-speed").innerHTML = dados.wind.speed.toString() + " m/s";
        document.getElementById("clouds").innerHTML = "clouds: " + dados.clouds.all.toString() + " %";
    };
    WeatherSearcher.prototype.convertTemp = function (temperature) {
        var result = temperature - 271.15;
        return Math.round(result).toString() + "°C";
    };
    return WeatherSearcher;
}());
export { WeatherSearcher };
//# sourceMappingURL=weathersearcher.js.map