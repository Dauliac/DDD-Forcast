import {SunComponent} from '../components/Sun.js'
import {sunClass} from '../models/Sun.js'

export class SunController {
    constructor() {
        this._class = sunClass
        this._query = '.' + this._class
    }

    // In seconds
    animate(duration) {
        console.log('DURATION' + duration)
        let durationMs = 20*1000
        if(duration) {
            durationMs = duration*1000
        }

        const oldSunElement = document.querySelector(this._query)
        const newSunElement = new SunComponent(this._query)

        oldSunElement.parentNode.replaceChild(newSunElement, oldSunElement)

        setTimeout(() => {
            const oldSunElement = document.querySelector(this._query)
            oldSunElement.remove()
            // TODO replace with default template div
            //oldSunElement.parentNode.replaceChild(oldSunElement, newSunElement)
        }, durationMs);
    }

}
