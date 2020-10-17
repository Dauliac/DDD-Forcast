export class HourForecast {
    constructor(
        id,
        hour,
        condition,
        temperature,
        relativHumidity,
        rainInMilimiter,
        windSpeed,
        windDirection,
        isSnow,
        icon
    ) {
        this._id = id
        this._hour = hour
        this._condition = condition
        this._temperature = temperature
        this._relativHumidity = relativHumidity
        this._rainInMilimiter = rainInMilimiter
        this._windSpeed = windSpeed
        // TODO create cardinality class with api
        this._windDirection = windDirection
        this._isSnow = isSnow
        // TODO: check if this value always exist
        // this.isRain
        this._icon = icon

        // Freeze it because this is a value object
        // That's protect underscored properties
        // Problem: modification of underscored
        // don't raise error
        Object.freeze(this)
    }

    get id() {return this._id}
    get hour() {return this._hour}
    get condition() {return this._condition}
    get temperature() {return this._temperature}
    get relativHumidity() {return this._relativHumidity}
    get rainInMilimiter() {return this._rainInMilimiter}
    get windSpeed() {return this._windSpeed}
    get windDirection() {return this._windDirection}
    get isSnow() {return this._isSnow}
    get icon() {return this._icon}
}
