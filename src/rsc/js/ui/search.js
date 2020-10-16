// import Fuse from 'fuse.js'
import {accentsTidy} from './preprocessors.js'
import {ForecastComponent} from './forecastComponent.js'
import {Forecasts} from '../domain/aggregates/Forecasts.js'

const updateCity = input => {
    let cityProcessed
    if(Number.isInteger(Number(input))) {
        //TODO use CITY service to find city
    } else {
        cityProcessed = accentsTidy(input)
    }

    return (callback) => {
        callback(cityProcessed).then((forecast) => {
            console.log()
            const forecastComponent = new ForecastComponent(forecast)
            forecastComponent.update()
            return true
        })
    }
}

const searchHandler = (formEvent) => {
    formEvent.preventDefault()

    return input => {
        updateCity(input.value)
        input.value=''
    }
}

export class BrowserCity {
    constructor(cityList, formClassName) {
        this.cityList = cityList;
        this.currentCity = null
        if(formClassName) {
            this._formClass = '.' + formClassName
        } else {
            this._formClass = '.city-browser'
        }

        this.searchHandler = searchHandler
        this.updateCity = updateCity
    }

    async addSearchListeners(callback) {
        const form = await document.querySelector(this._formClass)
        const input = await document.querySelector(this._formClass + ' input')
        // Enpty form
        form.addEventListener('submit',
            (event) => {
                this.searchHandler(event)(input)(callback)
            }
        )
    }
}

