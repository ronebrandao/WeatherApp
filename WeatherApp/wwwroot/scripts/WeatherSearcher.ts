export class WeatherSearcher {
    searchWeatherByCity(name: string) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b23f8f25d0cb302de470df7c83c1b30b`)
            .then((response) => {

                if (response.ok) {
                    return response.json();
                }

                alert(`The city ${name} does not exists`);

            }).catch((err) => {
                console.log("An error has ocurred: ", err);
            });
    }

}
