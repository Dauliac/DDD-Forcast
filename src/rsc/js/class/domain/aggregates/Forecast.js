import {Forecast} from '../values/Forecast.js'

// Agegator of different type of forecast
export class Forecast {
    constructor(
        city,
    ) {
        this.city = city
    }

    // cityApi and foreCastApi
    // are objects returned from the apis
    static Factory(cityApi, forecastApi) {
        const city = new City(name=cityApi.name,
                        country= ,
                        region=cityApi.region,
                        postalCode=cityApi.npa,
                        latitude=forecastApi.city_info.latitude,
                        longitude=forecastApi.city_info.longitude,
                        elevation=forecastApi.city_info.elevation,
                        sunrise=forecastApi.city_info.sunrise,
                        sunset=forecastApi.city_info.sunset
        )

        //TODO CREATE OTHERS VALUE OBJECTS
        weather = new Weather(city,)
        return
    }
}
