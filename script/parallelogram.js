// function calculateParallelogramInput(){
//     const parallelogramBase = document.getElementById('parallelogram-base')
//     const parallelogramText = parallelogramBase.value; 
//     const base = parseFloat(parallelogramText)
//     console.log( base)

//     // get parallelogram height
//     const parallelogramHeight = document.getElementById('parallelogram-height')
//     const parallelogramHeightText = parallelogramHeight.value;
//     const height = parseFloat(parallelogramHeightText)
//     console.log(height)

//     const area = 
// }

function calculateParallelogramArea(){
    const base =getInputValueById('parallelogram-base')
    console.log('input value',base)
    const height = getInputValueById('parallelogram-height')
    console.log('height value',height)

    const area = base * height;
    console.log('area of the parallelogram',area)

    setInnerTextById('parallelogram-area',area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue= parseFloat(inputValueText)
    return inputValue;

}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}