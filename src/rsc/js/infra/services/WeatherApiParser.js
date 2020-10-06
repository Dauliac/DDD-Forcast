export class WeatherApiParser {
    constructor(cityApi=null, cityName=null) {
        this.url
        this.baseApiUrl = "https://prevision-meteo.ch/services/json/"
        if(!cityApi && cityName) {
            this.url = this.baseApiUrl + cityName
        } else {
            this.url = this.baseApiUrl + cityApi.url
        }
    }

    async getApiContent() {
        console.log(this.url)
        const response = await fetch(this.url)
        if (response.ok) {
            const forecast = await response.json()

            // Remove unused object from forecastApi object
            delete forecast.forecast_info
            return forecast
        } else {
            return false
        }
    }
}
