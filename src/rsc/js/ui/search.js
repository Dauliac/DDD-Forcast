// import Fuse from 'fuse.js'
import {accentsTidy} from './preprocessors.js'
import {Weather} from '../domain/aggregates/Weather.js'

const searchHandler = (formEvent) => {
        formEvent.preventDefault()

        return input => {
            let cityProcessed
            if(Number.isInteger(Number(input))) {
                //TODO use CITY service to find city
            } else {
                cityProcessed = accentsTidy(input.value)
            }
            input.value=''

            return (callback) => {
                callback(cityProcessed).then(() => {
                    return true
                })
            }
        }
    }

const typeHandler = inputEvent => {

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
