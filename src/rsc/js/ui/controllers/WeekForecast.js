import {WeekForecastComponent} from '../components/WeekForecast.js'
import {weekForecastClass} from '../models/WeekForecast.js'

export class WeekForecastController {
    constructor() {
        this._class = weekForecastClass
        this._tooltipClass = this._class + '-tooltip'

        this._query = '.' + this._class
        this._tooltipQuery = '.' + this._tooltipClass
    }

    update(weekForecast) {
        const oldWeekForecastElement = document.querySelector(this._query)
        const newWeekForecastElement = new WeekForecastComponent(weekForecast, this._tooltipQuery, this._tooltipClass)

        oldWeekForecastElement.parentNode.replaceChild(newWeekForecastElement, oldWeekForecastElement)

        // Reload tooltips
        $(this._tooltipQuery).tooltip()
    }

}
