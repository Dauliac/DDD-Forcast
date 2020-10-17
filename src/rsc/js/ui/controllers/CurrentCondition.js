import {CurrentConditionComponent} from '../components/CurrentCondition.js'
import {currentConditionClass} from '../models/CurrentCondition.js'

export class CurrentConditionController {
    constructor() {
        this._class = currentConditionClass
        this._tooltipClass = this._class + '-tooltip'

        this._query = '.' + this._class
        this._tooltipQuery = '.' + this._tooltipClass
    }

    update(currentCondition) {
        const oldCurrentConditionElement = document.querySelector(this._query)
        const newCurrentConditionElement = new CurrentConditionComponent(currentCondition, this._tooltipQuery, this._tooltipClass)

        oldCurrentConditionElement.parentNode.replaceChild(newCurrentConditionElement, oldCurrentConditionElement)

        // Reload tooltips
        $(this._tooltipQuery).tooltip()
    }

}
