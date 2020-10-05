export class CityApiParser {
    constructor() {
        this.url = "https://geo.api.gouv.fr/communes?nom="
        this.cities = []
    }

    async updateCitiesList() {
        const response = await fetch(this.url)
        if (response.ok) {
            this.cities = await response.json()
            console.log(this.cities)
            return true
        } else {
            return false
        }
    }

    getCityByPostalCode(postalCode) {
        for (apiCity in cities) {
            if (apiCity.npa === postalCode) {
                return apiCity
            }
        }
        return false
    }

    getCityByName(name) {
        for (apiCity in cities) {
            if (apiCity.name === name) {
                return apiCity
            }
        }
        return false
    }
}
