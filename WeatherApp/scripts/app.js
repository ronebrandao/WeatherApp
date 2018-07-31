import { WeatherSearcher } from "./WeatherSearcher.js";
window.onload = function () {
    var cityNameInput = document.getElementById("search");
    var resultContainer = document.getElementById("results");
    var searchButton = document.getElementById("btn-search");
    var weather = new WeatherSearcher();
    searchButton.onclick = function () {
        var cityName = cityNameInput.value;
        if (!cityName)
            return;
        weather.searchWeatherByCity(cityName)
            .then(function (dados) {
            if (dados != null) {
                var tempNode = document.createElement("p");
                tempNode.innerHTML = "Temperature: " + dados.main.temp + " \u00B0F";
                resultContainer.appendChild(tempNode);
                var tempNode2 = document.createElement("p");
                tempNode2.innerHTML = "Humidity: " + dados.main.humidity;
                resultContainer.appendChild(tempNode2);
            }
        });
        cityNameInput.value = "";
    };
};
//# sourceMappingURL=app.js.map