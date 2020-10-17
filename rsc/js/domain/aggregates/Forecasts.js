import {Forecast} from '../entity/Forecast.js'

// Agregates of different forecast by city
export class Forecasts {
    constructor(maxCity=5){
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

    _isForecastsFull() {
        if(this._forecasts.length <= this.maxCity) {
            return false
        }
        return true
    }

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

    addForecast(callback) {
        return async (forecastApi) => {
            const forecastId = this._getNewForecastId()

            const forecast = Forecast.Factory(forecastId, forecastApi)

            if(this._isForecastsFull()) {
                this._forecasts.shift()
            }

            this._forecasts.push(forecast)

            return callback(forecast)
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
