function TriangleCalculateArea(){
    const triangleBaseField = document.getElementById('triangle-based')
    const triangleBaseText = triangleBaseField.value;
    const base = parseFloat(triangleBaseText)
    console.log(  base)

    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value
    const height = parseFloat(triangleHeightText)
    console.log(height)

    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area)

    // triangle area------------------
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText= area
}