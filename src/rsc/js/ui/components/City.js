import {cityClass} from '../models/City.js'

export class CityComponent extends HTMLElement {

    constructor(city, queryClass, tooltipQueryClass) {
        super()

        this._city = city
        this._tooltipQueryClass = tooltipQueryClass

        this.innerHTML = this._render()
        this.setAttribute('class', cityClass)
    }

    _render() {
        return `
            <div class="d-flex flex-column bd-highlight mb-2">
                <div class="p-4">
                    <h2 class="forecast._city-name display-4">${this._city.name}</h2>
                </div>
                <div class="d-flex flex-column bd-highlight mb-2 flex-row flex-wrap">
                    <div class="bd-highlight d-flex flex-row mb-4">
                        ${this._renderSunrise()}
                        ${this._renderSunset()}
                    </div>
                    <div class="bd-highlight d-flex flex-row mb-4">
                        ${this._renderLongitude()}
                        ${this._renderLatitude()}
                    </div>
                </div>
            </div>
        `
    }

    _renderSunrise() {
        const tooltip = 'Heure du levé du soleil'
        return `
            <div class="p-1 ${this._tooltipQueryClass}" data-toggle="tooltip" data-placement="top" title="${tooltip}">
              <span>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-alt-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4 11a4 4 0 1 1 8 0 .5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 11zm4-8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM4.464 7.464a.5.5 0 0 1-.707 0L2.343 6.05a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"/>
                </svg>
                <span class="forecast._city-sunrise">${this._city.sunrise}</span>
              </span>
            </div>
        `
    }

    _renderSunset() {
        const tooltip = 'Heure du couché du soleil'
        return `
            <div class="p-1 ${this._tooltipQueryClass}" data-toggle="tooltip" data-placement="top" title="${tooltip}">
              <span>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-brightness-alt-low-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
                    <path fill-rule="evenodd" d="M4 11a4 4 0 1 1 8 0 .5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 11z"/>
                </svg>
                <span class="forecast._city-sunrise">${this._city.sunset}</span>
              </span>
            </div>
        `
    }

    _renderLongitude() {
        const tooltip = 'Longitude'
        return `
            <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <span class="forecast._city-sunrise">${this._city.longitude}</span>
            </div>
        `
    }

    _renderLatitude() {
        const tooltip = 'Latitude'
        return `
            <div class="p-1 ${this._tooltipQueryClass}" tabindex="0" data-toggle="tooltip" data-placement="top" title="${tooltip}">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                  <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
                <span class="forecast._city-sunrise">${this._city.latitude}</span>
            </div>
        `
    }

}

customElements.define(cityClass, CityComponent)
