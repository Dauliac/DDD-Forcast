import {Conditions} from './Conditions.js'

export class CurrentCondition extends Conditions {
    constructor(
        id,
        temperature,
        windSpeed,
        windDirection,
        presure,
        condition,
        humidity,
        icon,
        iconBig
    ) {

        const date = new Date()
        super(id, date, condition, icon, iconBig)
        this._temperature = temperature
        this._windSpeed = windSpeed
        this._windDirection = windDirection
        this._presure = presure
        this._humidity = humidity

        // Freeze it because this is a value object
        // That's protect underscored properties
        // Problem: modification of underscored
        // don't raise error
        Object.freeze(this)
    }

    get temperature() {return this._temperature}
    get windSpeed() {return this._windSpeed}
    get windDirection() {return this._windDirection}
    get presure() {return this._presure}
    get humidity() {return this._humidity}
}
