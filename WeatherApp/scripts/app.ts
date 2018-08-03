import { WeatherSearcher } from "./weathersearcher.js";

window.onload = () => {

    let cityNameInput = document.getElementById("search") as HTMLInputElement;
    let searchButton = document.getElementById("btn-search") as HTMLButtonElement;
    let locationButton = document.getElementById("btn-location") as HTMLButtonElement;

    let weather = new WeatherSearcher();

    searchButton.onclick = () => {

        let cityName = cityNameInput.value;

        if (!cityName) return;

        weather.searchWeatherByCity(cityName)
            .then(data => {
                if (data != null) {
                    weather.bindData(data);
                }
            });
    
        cityNameInput.value = "";
    }

    locationButton.onclick = () => {

        navigator.geolocation.getCurrentPosition((loc) => {
            weather.searchWeatherByCoordinates(loc.coords.latitude, loc.coords.longitude)
                .then(data => {
                    if (data != null) {
                        weather.bindData(data);
                    }       
                });
        });
    }
}
