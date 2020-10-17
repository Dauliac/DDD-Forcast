// HTML From this codepend: https://codepen.io/motorlatitude/pen/CyqDf
import {sunClass} from '../models/Sun.js'

export class SunComponent extends HTMLElement {

    constructor(queryClass) {
        super()

        this.innerHTML = this._render()
        this.setAttribute('class', sunClass)
    }

    _render() {
        return `
        <div class="sun">
          <div class="cloud">
            <div class="cloud1">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="cloud1 c_shadow">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="cloud_s">
            <div class="cloud1">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="cloud1 c_shadow">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="cloud_vs">
            <div class="cloud1">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="cloud1 c_shadow">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div class="haze"></div>
          <div class="haze_stripe"></div>
          <div class="haze_stripe"></div>
          <div class="haze_stripe"></div>
          <div class="thunder"></div>
          <div class="rain">
             <ul>
               <li></li>
               <li></li>
               <li></li>
            </ul>
          </div>
          <div class="sleet">
             <ul>
               <li></li>
               <li></li>
               <li></li>
            </ul>
          </div>
        </div>
        `
    }
}

customElements.define(sunClass, SunComponent)
