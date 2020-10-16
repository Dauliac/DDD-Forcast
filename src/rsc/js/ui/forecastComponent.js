import {CurrentConditionComponent} from './currentConditionComponent.js'
import {CityComponent} from './cityComponent.js'

export class ForecastComponent {
    constructor(forecast) {
        this._cityComponent = new CityComponent(forecast.city)
        this._currentConditionComponent = new CurrentConditionComponent(forecast.currentCondition)
    }

    update() {
        this._cityComponent.updateAll()
        this._currentConditionComponent.updateAll()
        return true
    }
}

