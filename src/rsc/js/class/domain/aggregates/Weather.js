import {CityApiParser} from '../../infra/services/CityApiParser.js'
import {WeatherApiParser} from '../../infra/services/WeatherApiParser.js'
import {Forecast} from '.'

// Repository of different forecast by city
export class Weather {
    constructor(totalCityCache=5){
        cityService = new CityApiParser()
        const forecasts = []
        const cityLimit = totalCityCache
    }

    // Note: cityName and cityPostalCode are mutual exclusives parameters
    _getForecastSvc(cityName, cityPostalCode, updateCityList=true) {
        if(updateCityList) {
            isUpdated = iscityService.updateCitiesList()
        }

        if(cityName !== undefined
           && typeof cityName 'string'
        ) {
            const cityApi = cityService.getCityByPostalCode(cityName)
            return new WeatherApiPaser(cityApi)

        } else if(cityPostalCode !== undefined
                  && Number.isInteger(cityPostalCode)
        ) {
            const cityApi = cityService.getCityByName(cityPostalCode)
            return new WeatherApiPaser(cityApi)

        } else {
            // Should not be possible use name or postal code
            return false
        }
    }

    _isForecastsFull() {
        if(forecasts.length() <= cityLimit) {
            return false
        }
        return true
    }

    AddForecast(cityName, cityPostalCode, updateCityList=true) {

        const forecastSvc =  this._getForecastSvc()

        // Json content from the api
        const forecastApi = weatherSvc.getApiContent()
        const forecast = ForecastAgregator.Factory(weatherSvc.cityApi, forecastApi)

        if(this._isForecastsFull()) {
            forecast.shift()
        }

        this.forecasts.push(forecast)
    }

    getForecastById(id) {
        if(id > cityLimit) {
            return this.forecasts[id]
        }
        return false
    }
}
