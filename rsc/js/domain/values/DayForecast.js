import {Conditions} from './Conditions.js'

export class DayForecast extends Conditions {
    constructor(
        id,
        date,
        condition,
        temperatureMinimal,
        temperatureMaximal,
        icon,
        iconBig,
        perHourForecasts
    ) {
        super(id, date, condition, icon, iconBig)
        this._temperatureMinimal = temperatureMinimal
        this._temperatureMaximal = temperatureMaximal
        this._perHourForecasts = perHourForecasts

        // Freeze it because this is a value object
        // That's protect underscored properties
        // Problem: modification of underscored
        // don't raise error
        Object.freeze(this)
    }
    get temperatureMinimal() {return this._temperatureMinimal}
    get temperatureMaximal() {return this._temperatureMaximal}
    get perHourForecasts() {return this._perHourForecasts}
}
