import {updateValueByClass} from './preprocessors.js'
import {updateSrcTagByClass} from './preprocessors.js'
import {fromCelciusToFahrenheit} from './preprocessors.js'
import {updateTitleByClass} from './preprocessors.js'

export class CurrentConditionComponent {
    constructor(currentCondition) {
        this._currentCondition = currentCondition
        this._classSelector = '.forecast-currentCondition-'
    }

    updateDate() {
        const queryClass = this._classSelector + 'date'
        updateValueByClass(queryClass, this._currentCondition.date)
        return true
    }

    updateCondition() {
        const queryClass = this._classSelector + 'condition'
        updateValueByClass(queryClass, this._currentCondition.condition)
        return true
    }

    updateIcon() {
        const queryClass = this._classSelector + 'icon'
        updateSrcTagByClass(queryClass, this._currentCondition.icon)
        return true
    }

    updateTemperature(fahrenheit=false) {
        // default is celcius
        // TODO move conversion in domain
        let value = this._currentCondition.temperature
        let suffix = '°c'
        if(fahrenheit) {
            value = fromCelciusToFahrenheit(value)
            suffix = '°F'
        }
        const queryClass = this._classSelector + 'temperature'
        updateValueByClass('span' + queryClass, value +  suffix)

        // TODO: multilingual support
        //Update tooltip
        updateTitleByClass(queryClass + '-tooltip', 'Température')
    }

    updateHumidity() {
        const queryClass = this._classSelector + 'humidity'
        updateValueByClass('span' + queryClass, this._currentCondition.humidity)

        // TODO: multilingual support
        //Update tooltip
        updateTitleByClass(queryClass + '-tooltip', 'Humidity')
    }

    updateWindSpeed() {
        const queryClass = this._classSelector + 'windSpeed'
        updateValueByClass('span' + queryClass, this._currentCondition.windSpeed)

        // TODO: multilingual support
        //Update tooltip
        const toolTipMsg = 'Wind speed from: ' + this._currentCondition.windDirection
        console.log('MSG' + toolTipMsg)
        updateTitleByClass(queryClass + '-tooltip', toolTipMsg)
    }

    updateAll() {
        this.updateDate()
        this.updateCondition()
        this.updateIcon()
        this.updateTemperature()
        this.updateHumidity()
        this.updateWindSpeed()
        return true
    }
}
