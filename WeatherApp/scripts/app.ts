import { WeatherSearcher } from "./WeatherSearcher.js";

window.onload = () => {

    let cityNameInput = document.getElementById("search") as HTMLInputElement;
    let resultContainer = document.getElementById("results") as HTMLUListElement;
    let searchButton = document.getElementById("btn-search") as HTMLButtonElement;

    let weather = new WeatherSearcher();

    searchButton.onclick = () => {

        let cityName = cityNameInput.value;

        if (!cityName) return;

        weather.searchWeatherByCity(cityName)
            .then(dados => {
                if (dados != null) {
                    let tempNode = document.createElement("p");
                    tempNode.innerHTML = `Temperature: ${dados.main.temp} °F`;
                    resultContainer.appendChild(tempNode);
                    let tempNode2 = document.createElement("p");
                    tempNode2.innerHTML = `Humidity: ${dados.main.humidity}`;
                    resultContainer.appendChild(tempNode2);
                }
            });

        cityNameInput.value = "";

    }

}


