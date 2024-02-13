function calculateRectangleArea(){
    // length area
    const lengthInput = document.getElementById('rectangle-length')
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText) 
    console.log(length)

    //  width area
    const widthInput = document.getElementById('rectangle-width')
    const widthText = widthInput.value;
    const width = parseFloat(widthText)
    console.log(width)

    // calculate rectangle area
    const area = length * width
    console.log('Area of the rectangle', area)
    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    rectangleAreaSpan.innerText= area;
}