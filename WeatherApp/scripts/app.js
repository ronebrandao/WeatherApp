import { WeatherSearcher } from "./weathersearcher.js";
window.onload = function () {
    var cityNameInput = document.getElementById("search");
    var searchButton = document.getElementById("btn-search");
    var locationButton = document.getElementById("btn-location");
    var weather = new WeatherSearcher();
    searchButton.onclick = function () {
        var cityName = cityNameInput.value;
        if (!cityName)
            return;
        weather.searchWeatherByCity(cityName)
            .then(function (data) {
            if (data != null) {
                weather.bindData(data);
            }
        });
        cityNameInput.value = "";
    };
    locationButton.onclick = function () {
        navigator.geolocation.getCurrentPosition(function (loc) {
            weather.searchWeatherByCoordinates(loc.coords.latitude, loc.coords.longitude)
                .then(function (data) {
                if (data != null) {
                    weather.bindData(data);
                }
            });
        });
    };
};
//# sourceMappingURL=app.js.map