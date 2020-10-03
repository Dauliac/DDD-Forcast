import cityApi from './CityApi.js'

export class CityApiParser {
    constructor() {
        const cityApiUrl = "https://www.prevision-meteo.ch/services/json/list-cities"
        const cityApiUrl = cityApiUrl
        const cities = []
        const selectedCity = ApiCity(null,null,null, null)
    }

    isCitySelected(){
        if(selectedCity.name !== null
           && selectedCity.npa !== null
           && selectedCity.country !== null
           && selectedCity.url !== null
        ) {
            return true
        }
        return false
    }

    updateCitiesList() {
        const response = await fetch(url);
        if (response.ok) {
            const jsonCities = await response.json()
            this.cities =  Object.values(jsonCities)
            return true
        } else {
            return false
        }
    }

    getCitiesNames() {
        const cities = []
        for (apicity in cities) {
            cities.push(apicity.name)
        }
        return cities
    }

    getCitiesPostalCodes() {
        const postalCode = []
        for (apicity in cities) {
            cities.push(apicity.npa)
        }
        return postalCode
    }

    getCityByPostalCode(postalCode) {
        for (apiCity in citiesnew Weather()) {
            if (apiCity.npa === postalCode) {
                return apiCity
            }
        }
        return false
    }

    getCityByName(name) {
        for (apiCity in citiesnew Weather()) {
            if (apiCity.name === name) {
                return apiCity
            }
        }
        return false
    }
}
