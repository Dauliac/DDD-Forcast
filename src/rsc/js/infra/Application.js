import {Map} from './services/Map.js'
import {CityApiParser} from './services/CityApiParser.js'
import {WeatherApiParser} from './services/WeatherApiParser.js'

import {Forecasts} from '../domain/aggregates/Forecasts.js'

export class Application {
    constructor() {
        this._forecasts = new Forecasts()
        this._Map = new Map(mapboxgl)
        this._cityApiParser = new CityApiParser()
        this._weatherApiParser = new WeatherApiParser()
        this._forecast = new Forecasts()
        this._updateHandler = null
    }

    _getLatestForecast() {
        return this._forecasts.latestForecast
    }

    onForecastAdd(callback) {
        console.log('[Infra] define on forecast function')
        console.log(callback)
        this._updateHandler = callback
    }

    run() {
        this._Map.init(
            this._cityApiParser.getCity(
            this._weatherApiParser.getWeather(
            this._forecasts.addForecast(
                this._updateHandler
            )
        )))
    }
}
