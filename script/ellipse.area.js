function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-area')
    const minorRadius = getInputValueById('ellipse-minor-area')
    const area = 3.14 * majorRadius * minorRadius
    setInnerTextById('ellipse-area', area)
}