class DayForecast {
    constructor(
        hour,
        date,
        day,
        condition,
        tmin,
        tmax,
        isSnow,
        icon,
        iconBig,
        hourforecasts

    ) {
        this.hour = hour
        this.date = date
        this.day = day
        this.condition = condition
        this.tmin = tmin
        this.tmax = tmax
        this.isSnow = isSnow
        this.icon = icon
        this.iconBig = iconBig
        this.hourForecasts = hourforecasts
    }
    static Factory() {

    }
}


