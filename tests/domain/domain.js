// import {CityApiParser} from '../../src/rsc/js/class/infra/services/CityApiParser.js';
// import {WeatherApiParser} from '../../src/rsc/js/class/infra/services/WeatherApiParser.js'

import {Weather} from '../../src/rsc/js/class/domain/aggregates/Weather.js'

// const weatherApi = new WeatherApiParser(null, 'bordeaux')

// weatherApi.getApiContent().then(data => {
//     console.log(data)
// })

const weather = new (Weather)
weather.addForecast('bordeaux')
console.log(weather.latestForecast)
weather.addForecast('paris').then(
(ok) => {
    console.log(weather.latestForecast.city)
})
