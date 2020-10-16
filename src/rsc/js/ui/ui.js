import {CityComponent} from './components/City.js'
import {CityController} from './controllers/City.js'
import {CurrentConditionComponent} from './components/CurrentCondition.js'
import {CurrentConditionController} from './controllers/CurrentCondition.js'

export class Ui {
    constructor() {
        this._cityController = new CityController()
    }

    updateAll() {
        return (dataForecast) => {
            console.log('[UI] Update data')
            console.log(dataForecast)
            const forecast = dataForecast
            this._cityController.updatecity(forecast.city)
        }
    }

}
