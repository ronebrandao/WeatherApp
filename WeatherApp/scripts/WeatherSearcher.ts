export class WeatherSearcher {
    searchWeatherByCity(name: string) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b23f8f25d0cb302de470df7c83c1b30b`)
            .then((response) => {

                if (response.ok)
                    return response.json();

                alert(`The city ${name} does not exists`);

            }).catch((err) => {
                console.log("An error has ocurred: ", err);
            });
    }

    searchWeatherByCoordinates(latitude: number, longitude: number) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b23f8f25d0cb302de470df7c83c1b30b`)
            .then((response) => {

                if (response.ok)
                    return response.json();

                alert("Something wrong happened, try again!");

            }).catch((err) => {
                console.log("An error has ocurred: ", err);
            });
    }

    bindData(dados: any) {
        (document.getElementById("city-name") as HTMLHeadingElement).innerHTML = dados.name.toString();
        (document.getElementById("icon") as HTMLImageElement).src = `http://openweathermap.org/img/w/${dados.weather[0].icon}.png`;
        (document.getElementById("temperature") as HTMLSpanElement).innerHTML = this.convertTemp(dados.main.temp);
        (document.getElementById("min-temp") as HTMLSpanElement).innerHTML = `Min: ${this.convertTemp(dados.main.temp_min)}`;
        (document.getElementById("max-temp") as HTMLSpanElement).innerHTML = `Max: ${this.convertTemp(dados.main.temp_max)}`;
        (document.getElementById("description") as HTMLSpanElement).innerHTML = dados.weather[0].description;
        (document.getElementById("wind-speed") as HTMLSpanElement).innerHTML = `${dados.wind.speed.toString()} m/s`;
        (document.getElementById("clouds") as HTMLSpanElement).innerHTML = `clouds: ${dados.clouds.all.toString()} %`;
    }

    private convertTemp(temperature: number) {
        let result = temperature - 271.15
        return Math.round(result).toString() + "°C";
    }
}
