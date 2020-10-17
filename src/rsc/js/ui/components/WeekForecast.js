import {weekForecastClass} from '../models/WeekForecast.js'

export class WeekForecastComponent extends HTMLElement {

    constructor(weekForecast, queryClass, tooltipQueryClass) {
        super()

        this._weekForecast = weekForecast
        this._tooltipQueryClass = tooltipQueryClass

        this.innerHTML = this._render()
        this.setAttribute('class', weekForecastClass)
    }

    _render() {
        return `
            <div class="week d-flex flex-row bd-highlight mb-2 flex-wrap justify-content-between">
                    ${this._renderDays()}
            </div>
        `
    }
    _renderDays() {
        let html = ''
        // Skip first day it's already displayed
        for(let dayNumber = 1; dayNumber < this._weekForecast.length; dayNumber++){
            console.log(dayNumber)
            console.log(this._weekForecast[dayNumber])
            const day = this._weekForecast[dayNumber]

            const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            const date = day.date.toLocaleDateString('fr-FR', dateOptions)

            html += `
            <div class="date-card p-2 bd-highlight d-flex flex-column mb-4">
                <div>
                    ${date}
                </div>
                <div>
                    ${this._renderIcon(day.icon, day.condition)}
                </div>
                <div class="p-2 bd-highlight d-flex flex-row">
                    <div>
                        Minimum ${day.temperatureMinimal}
                    </div>
                    <div>
                        Maximum: ${day.temperatureMaximal}
                    </div>
                </div>
            </div>
            `
        }
        return html
    }

    _renderIcon(iconUrl, iconAlt) {
        return `
            <img src="${iconUrl}" alt="${iconAlt}">
        `
    }

    // _renderTemperature() {
    //     const tooltip = 'Température'
    //     return `
    //         <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
    //             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-thermometer-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z"/>
    //                   <path d="M8.25 2a.25.25 0 0 0-.5 0v9.02a1.514 1.514 0 0 1 .5 0V2z"/>
    //                 <path d="M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    //             </svg>
    //             <span>
    //                 ${this._weekForecast.temperature}
    //             </span>
    //         </div>
    //     `
    // }

    // _renderHumidity() {
    //     const tooltip = 'Humidité'
    //     return `
    //         <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
    //             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-droplet-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
    //                 <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
    //             </svg>
    //             <span>
    //                 ${this._weekForecast.humidity}
    //             </span>
    //         </div>
    //     `
    // }

    // _renderWindSpeed() {
    //     const tooltip = 'Vitesse du vent'
    //     return `
    //         <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
    //             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sort-numeric-up-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" d="M4 14a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5z"/>
    //                 <path fill-rule="evenodd" d="M6.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L4 3.207l1.646 1.647a.5.5 0 0 0 .708 0z"/>
    //                 <path d="M9.598 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008zM12.438 14V8.668H11.39l-1.262.906v.969l1.21-.86h.052V14h1.046z"/>
    //             </svg>
    //             <span>
    //                 ${this._weekForecast.windSpeed}
    //             </span>
    //         </div>
    //     `
    // }

    // _renderWindDirection() {
    //     const tooltip = 'Direction du vent'
    //     return `
    //         <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
    //             <svg width="1em" height="1.0625em" viewBox="0 0 16 17" class="bi bi-compass" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
    //                 <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
    //             </svg>
    //             <span>
    //                 ${this._weekForecast.windDirection}
    //             </span>
    //         </div>
    //     `
    // }
}

customElements.define(weekForecastClass, WeekForecastComponent)
