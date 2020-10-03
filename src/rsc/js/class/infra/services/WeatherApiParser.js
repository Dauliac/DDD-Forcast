const urljoin = require('url-join');

export class WeatherApiPaser {
    constructor(cityApi) {
        this.cityApi = cityApi

        const baseApiUrl = "https://prevision-meteo.ch/services/json/"
        const url = urljoin(baseApiUrl, cityApi.url)
    }

    getApiContent() {
        const response = await fetch(url);
        if (response.ok) {
            const jsonCities = await response.json()
            return forecast =  Object.values(jsonCities)
        } else {
            return false
        }
    }
}
