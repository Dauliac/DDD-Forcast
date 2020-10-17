export const dateCorrector = (dottedDate) => {
    const dateArray = dottedDate.split('.')
    // Invert day/month
    const correctDateStr = `${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`

    return new Date(correctDateStr)
}
