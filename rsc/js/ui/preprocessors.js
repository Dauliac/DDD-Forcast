
export const accentsTidy = dirtyString => {
    const tidyString = dirtyString.toLowerCase()
        .replace(new RegExp("\\s", 'g'),"")
        .replace(new RegExp("[àáâãäå]", 'g'),"a")
        .replace(new RegExp("æ", 'g'),"ae")
        .replace(new RegExp("ç", 'g'),"c")
        .replace(new RegExp("[èéêë]", 'g'),"e")
        .replace(new RegExp("[ìíîï]", 'g'),"i")
        .replace(new RegExp("ñ", 'g'),"n")
        .replace(new RegExp("[òóôõö]", 'g'),"o")
        .replace(new RegExp("œ", 'g'),"oe")
        .replace(new RegExp("[ùúûü]", 'g'),"u")
        .replace(new RegExp("[ýÿ]", 'g'),"y")
        .replace(new RegExp("\\W", 'g'),"")
    return tidyString
}

export const fromCelciusToFahrenheit = value => {
    return value*(5/9)
}

export const updateValueByClass = (classSelector, value) => {
    document.querySelector(classSelector).innerHTML = value
}

export const updateTitleByClass = (classSelector, value) => {
    document.querySelector(classSelector).title = value
}

export const updateSrcTagByClass = (classSelector, value) => {
    document.querySelector(classSelector).src = value
}
