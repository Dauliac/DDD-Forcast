import {ApiCity} from './ApiCity.js'

export class WeatherApiParser {
    constructor() {
        this.baseApiUrl = "https://prevision-meteo.ch/services/json/"
    }

    getWeather(callback) {
        return async (apiCity) => {

            const url = this.baseApiUrl + apiCity.city
            console.log(url)

            const response = await fetch(url)
            if (response.ok) {
                const forecast = await response.json()

                // Remove unused object from forecastApi object
                delete forecast.forecast_info
                console.log(forecast)
                return callback(forecast)
            } else {
                return false
            }
        }
    }
}
