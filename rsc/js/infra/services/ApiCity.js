export class ApiCity {
    constructor(city, country, lat, lon, postcode, display) {
        this._city = city
        this._contry = country
        this._lat = lat
        this._lon = lon
        this._postcode = postcode
        this._display = display
    }
    get name() {return this._name}
    get country() {return this._contry}
    get lat() {return this._lat}
    get lon() {return this._lon}
    get postcode() {return this._city}
    get city() {return this._city}
    get display() {return this._display}
}
