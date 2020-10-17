import {Ui} from './ui/ui.js'
import {Application} from './infra/Application.js'

// Create new application
const dddWeather = new Application()

// Create ui components
const ui = new Ui()

ui.loader(10)

// Link ui and domain
dddWeather.onForecastAdd(ui.updateAll())
dddWeather.run()
