import {CurrentConditionComponent} from '../components/CurrentCondition.js'
import {CurrentCondition} from '../models/CurrentCondition.js'

export class CityController {
    constructor() {
        this._class = cityClass
        this._tooltipClass = this._class + '-tooltip'

        this._query = '.' + this._class
        this._tooltipQuery = '.' + this._tooltipClass
    }

    updatecity(city) {
        const oldCityElement = document.querySelector(this._query)
        const newCityElement = new CityComponent(city, this._tooltipQuery, this._tooltipClass)

        oldCityElement.parentNode.replaceChild(newCityElement, oldCityElement)

        // Reload tooltips
        $(this._tooltipQuery).tooltip()
    }

}
