import {CityApiParser} from '../../src/rsc/js/class/infra/services/CityApiParser.js';
import {WeatherApiParser} from '../../src/rsc/js/class/infra/services/WeatherApiParser.js'

// FIX CityApiSvc
// const cityApiSvc = new CityApiParser()

// cityApiSvc.updateCitiesList().then(() => {
//     return cityApiSvc.getCityByPostalCode('3300')
// }).then( cityApi => {
//     const weatherApi = new WeatherApiPaser(cityApi)

//     weatherApi.getApiContent().then(data => {
//         console.log(data)
//     })
// })


const weatherApi = new WeatherApiParser(null, 'bordeaux')
weatherApi.getApiContent().then(data => {
    console.log(data)
})
