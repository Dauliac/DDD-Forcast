// import {CityApiParser} from '../../infra/services/CityApiParser.js'
import {WeatherApiParser} from '../../infra/services/WeatherApiParser.js'
import {Forecast} from './Forecast.js'

// Repository of different forecast by city
export class Weather {
    constructor(maxCity=5){
        // TODO FIX API CITY
        // cityService = new CityApiParser()
        this._forecasts = []
        this._cityLimit = maxCity
    }

    get forecasts() {
        if(cachePosition) {
            return this._forecasts[cachePosition]
        } else {
            return this._forecasts
        }
    }

    get cityLimit() {
        return this._cityLimit
    }

    get latestForecast() {
        return this._forecasts[this._forecasts.length -1]
    }

    getForecastByCachePos(cachePosition) {
        if(cachePosition) {
            return this._forecasts[cachePosition]
        } else {
            return false
        }
    }

    // Note: cityName and cityPostalCode are mutual exclusives parameters
    // _getForecastSvc(cityName, cityPostalCode, updateCityList=true) {
    //     if(updateCityList) {
    //         isUpdated = iscityService.updateCitiesList()
    //     }

    //     if(cityName !== undefined
    //        && typeof cityName 'string'
    //     ) {
    //         const cityApi = cityService.getCityByPostalCode(cityName)
    //         return new WeatherApiPaser(cityApi)

    //     } else if(cityPostalCode !== undefined
    //               && Number.isInteger(cityPostalCode)
    //     ) {
    //         const cityApi = cityService.getCityByName(cityPostalCode)
    //         return new WeatherApiPaser(cityApi)

    //     } else {
    //         // Should not be possible use name or postal code
    //         return false
    //     }
    // }

    _isForecastsFull() {
        if(this._forecasts.length <= this.maxCity) {
            return false
        }
        return true
    }

    // AddForecast(cityName, cityPostalCode, updateCityList=true) {

    //     const weatherApi = new WeatherApiPaser(null, 'bordeaux')
    //     // const forecastSvc =  this._getForecastSvc()

    //     // Json content from the api
    //     const forecastApi = weatherSvc.getApiContent()
    //     const forecast = Forecast.Factory(weatherSvc.cityApi, forecastApi)

    //     if(this._isForecastsFull()) {
    //         forecast.shift()
    //     }

    //     this.forecasts.push(forecast)
    // }

    _getNewForecastId() {
        const forecastsNumber = this._forecasts.length

        if(forecastsNumber !== 0) {
            // Get the id of the latest and increment of one
            return this._forecasts[forecastsNumber - 1].id + 1
        } else {
            // forecasts is empty
            return 0
        }
    }

    addForecast() {
        return async (cityName) => {
            const weatherSvc = new WeatherApiParser(null, cityName)

            // Json content from the api
            // const forecast = Forecast.Factory(weatherSvc.cityApi, forecastApi)
            const forecastApi = await weatherSvc.getApiContent()

            const forecastId = this._getNewForecastId()

            const forecast = Forecast.Factory(forecastId, forecastApi)

            if(this._isForecastsFull()) {
                this._forecasts.shift()
            }

            this._forecasts.push(forecast)
            console.log(forecast)

            return true
        }
    }

    getforecastById(id) {
        for(forecast in this.forecasts) {
            if(forecast.id > citylimit) {
                return forecast
            }
        }
        return false
    }
}
