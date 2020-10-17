export class Conditions {
    constructor(
        id,
        date,
        condition,
        icon,
        iconBig
    ) {
        this._id = id
        this._date = date
        this._condition = condition
        this._icon = icon
        this._iconBig = iconBig
    }

    get id() {return this._id}
    get date() {return this._date}
    get condition() {return this._condition}
    get icon() {return this._icon}
    get iconBig() {return this._iconBig}
}
