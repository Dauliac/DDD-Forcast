import {ApiCity} from './ApiCity.js'

export class CityApiParser {
    constructor() {
        this.baseUrl = "https://nominatim.openstreetmap.org/reverse?format=json"
    }

    _url(lon, lat) {
        return this.baseUrl + "&lon=" + lon + "&lat=" + lat
    }

    getCity(callback) {
        return async (longitude, latitude) => {
            const cityUrl = this._url(longitude, latitude)
            const response = await fetch(cityUrl)
            console.log(cityUrl)
            if (response.ok) {
                const nominatimApiCity = await response.json()
                console.log(nominatimApiCity)
                const normalizedApiCity = new ApiCity(
                    nominatimApiCity.address.city,
                    nominatimApiCity.address.country,
                    latitude,
                    longitude,
                    nominatimApiCity.address.postcode,
                    nominatimApiCity.display_name
                )
                console.log("Normalized")
                console.log(normalizedApiCity)
                return callback(normalizedApiCity)
            } else {
                return false
            }
        }
    }
}
