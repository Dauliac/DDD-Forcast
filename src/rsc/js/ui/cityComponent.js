import {updateValueByClass} from './preprocessors.js'

export class CityComponent {
    constructor(city) {
        this._city = city
        this._classSelector = '.forecast-city-'
    }

    updateCityName() {
        const queryClass = this._classSelector + 'name'
        updateValueByClass(queryClass, this._city.fullName)
        return true
    }

    updateCitySunrise() {
        const queryClass = this._classSelector + 'sunrise'
        updateValueByClass(queryClass, this._city.sunrise)
        return true
    }
    updateCitySunset() {
        const queryClass = this._classSelector + 'sunset'
        updateValueByClass(queryClass, this._city.sunset)
        return true
    }

    updateAll() {
        this.updateCityName()
        this.updateCitySunrise()
        this.updateCitySunset()
        return true
    }
}
