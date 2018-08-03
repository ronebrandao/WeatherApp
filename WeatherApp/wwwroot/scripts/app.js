import { WeatherSearcher } from "./weathersearcher.js";
window.onload = function () {
    var cityNameInput = document.getElementById("search");
    var searchButton = document.getElementById("btn-search");
    var weather = new WeatherSearcher();
    searchButton.onclick = function () {
        var cityName = cityNameInput.value;
        if (!cityName)
            return;
        weather.searchWeatherByCity(cityName)
            .then(function (dados) {
            if (dados != null) {
                weather.bindData(dados);
            }
        });
        cityNameInput.value = "";
    };
};
//# sourceMappingURL=app.js.map