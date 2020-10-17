import {City} from '../values/City.js'
import {DayForecast} from '../values/DayForecast.js'
import {HourForecast} from '../values/HourForecast.js'
import {CurrentCondition} from '../values/CurrentCondition.js'

import {dateCorrector} from './FactoryUtils.js'

// Value object of different type of forecast
export class Forecast {
    constructor(
        id,
        city,
        currentCondition,
        weekForecast
    ) {
        this._id = id
        this._city = city
        this._currentCondition = currentCondition
        this._weekForecast = weekForecast
    }

    get id() {
        return this._id
    }

    get city() {
        return this._city
    }

    get currentCondition() {
        return this._currentCondition
    }

    get weekForecast() {
        return this._weekForecast
    }

    // cityApi and forecastApi
    // are objects returned from the apis
    // TODO Fix city api
    // static Factory(cityApi, forecastApi) {
    static Factory(forecastId, forecastApi) {
        const city = new City(
            forecastApi.city_info.name,
            forecastApi.city_info.country,
            // cityApi.region,
            // cityApi.npa,
            forecastApi.city_info.latitude,
            forecastApi.city_info.longitude,
            forecastApi.city_info.elevation,
            forecastApi.city_info.sunrise,
            forecastApi.city_info.sunset
        )
        // Remove used objects to loop on parent after
        delete forecastApi.city_info

        // There is only one current condition,
        // this id is always 0
        const currentConditionId = 0
        const currentCondition = new CurrentCondition(
            currentConditionId,
            forecastApi.current_condition.tmp,
            forecastApi.current_condition.wnd_spd,
            forecastApi.current_condition.wnd_dir,
            forecastApi.current_condition.presure,
            forecastApi.current_condition.condition,
            forecastApi.current_condition.humidity,
            forecastApi.current_condition.icon,
            forecastApi.current_condition.icon_big
        )
        console.log('current condition: ' + JSON.stringify(currentCondition))
        // Remove used objects to loop on parent after
        delete forecastApi.current_condition
        let dayId = 0

        const weekForecast = []
        for(let dayKey in forecastApi) {
            // This key come from the api objects structure
            if(dayKey.match('^fcst_day_')) {
                const dayForecastApi = forecastApi[dayKey]

                const perHourForecasts = []
                // Build hour forecast

                let hourId = 0
                for(const hourKey in dayForecastApi.hourly_data) {
                    const hourForecastApi = dayForecastApi.hourly_data[hourKey]

                    const isSnow = (hourForecastApi.ISSNOW === 1)

                    const hourForecast = new HourForecast(
                        hourId,
                        hourKey,
                        hourForecastApi.condition,
                        hourForecastApi.TMP2m, // Temperature
                        hourForecastApi.RH2m, // Humidity
                        hourForecastApi.APCPsfc, // Rain
                        hourForecastApi.WNDSPD10m, // Wind speed
                        hourForecastApi.WNDDIRCARD10, // Wind direction
                        isSnow,
                        hourForecastApi.icon
                    )
                    perHourForecasts.push(hourForecast)
                    hourId++
                }

                const correctedDate = dateCorrector(dayForecastApi.date)
                // Build day forecast
                const forecastDay = new DayForecast(
                    dayId,
                    correctedDate,
                    dayForecastApi.condition,
                    dayForecastApi.tmin,
                    dayForecastApi.tmax,
                    dayForecastApi.icon,
                    dayForecastApi.iconBig,
                    perHourForecasts
                )

                weekForecast.push(forecastDay)
                dayId++
            }
        }
        console.log('week: ' + JSON.stringify(weekForecast))
        //Return builded forecast object
        const forecast = new Forecast(forecastId, city, currentCondition, weekForecast)
        return forecast
    }
}
