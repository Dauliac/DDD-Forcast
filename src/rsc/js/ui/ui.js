import {BrowserCity} from './search.js'
import {Application} from '../application/application.js'

export class Ui {
    constructor() {
        this.application = new Application()
        this.browserCity = new BrowserCity()

        this.browserCity.addSearchListeners(this.application.weather.addForecast())
    }

}
