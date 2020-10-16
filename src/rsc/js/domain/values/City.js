export class City {
    constructor(
        name,
        country,
        //TODO fix city api
        // region,
        // postalCode,
        latitude,
        longitude,
        elevation,
        sunrise,
        sunset,
    ) {
        this._name = name
        this._country = country
        // this.postalCode = postalCode
        this._latitude = latitude
        this._longitude = longitude
        this._elevation = elevation
        if(!sunset) {
            this._sunset = new Date()
        } else {
            this._sunset = sunset
        }
        this._sunrise = sunrise


        // Freeze it because this is a value object
        // That's protect underscored properties
        // Problem: modification of underscored
        // don't raise error
        Object.freeze(this);
    }
    get name() {return this._name}
    get country() {return this._country}
    get latitude() {return this._latitude}
    get longitude() {return this._longitude}
    get elevation() {return this._elevation}
    get sunrise() {return this._sunrise}
    get sunset() {return this._sunset}
    get fullName() {
        return this._name + ' ' + this._country.toUpperCase()
    }
}
