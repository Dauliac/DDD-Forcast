import {CityComponent} from './components/City.js'
import {CityController} from './controllers/City.js'

import {CurrentConditionComponent} from './components/CurrentCondition.js'
import {CurrentConditionController} from './controllers/CurrentCondition.js'

import {WeekForecastComponent} from './components/WeekForecast.js'
import {WeekForecastController} from './controllers/WeekForecast.js'

import {SunComponent} from './components/Sun.js'
import {SunController} from './controllers/Sun.js'

export class Ui {
    constructor() {
        this.sunController = new SunController()
        this._cityController = new CityController()
        this._currentConditionController = new CurrentConditionController()
        this._weekForecastController = new WeekForecastController()
    }

    loader(duration) {
        this.sunController.animate(duration)
    }

    updateAll() {
        return (dataForecast) => {
            console.log('[UI] Update data')
            console.log(dataForecast)
            const forecast = dataForecast
            this._cityController.update(forecast.city)
            this._currentConditionController.update(forecast.currentCondition)
            console.log("[UI] week forecast all")
            console.log(forecast.weekForecast)
            this._weekForecastController.update(forecast.weekForecast)
        }
    }

}
