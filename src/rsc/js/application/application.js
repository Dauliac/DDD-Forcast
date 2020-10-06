import {Weather} from '../domain/aggregates/Weather.js'

export class Application {
    constructor() {
        this.weather = new Weather()
    }
}
