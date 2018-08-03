import { WeatherSearcher } from "./weathersearcher.js";

window.onload = () => {

    let cityNameInput = document.getElementById("search") as HTMLInputElement;
    let searchButton = document.getElementById("btn-search") as HTMLButtonElement;

    let weather = new WeatherSearcher();

    searchButton.onclick = () => {

        let cityName = cityNameInput.value;

        if (!cityName) return;

        weather.searchWeatherByCity(cityName)
            .then(dados => {
                if (dados != null) {
                    weather.bindData(dados);
                }
            });

        cityNameInput.value = "";

    }
}
