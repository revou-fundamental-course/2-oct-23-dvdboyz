const title = document.getElementById('head-title')
const conversionButton = document.getElementById('buttonConvert')
const resetButton = document.getElementById('buttonReset')
const inputCelcius = document.getElementById('InputCelcius')
const inputFahrenheit = document.getElementById('InputFahrenheit')
const inputHasil = document.getElementById('InputHasil')

conversionButton.addEventListener('click', changeTitle)
function changeTitle() {
    title.innerHTML ="This is Temperature Calculator"
}

conversionButton.addEventListener('click', convertTemp);
function convertTemp() {
    const celciusValue = parseFloat(inputCelcius.value);
    const fahrenheitValue = parseFloat(inputFahrenheit.value);
    if(!isNaN(celciusValue) && isNaN(fahrenheitValue)){
        const resultFahrenheit = (celciusValue * 9/5) + 32;
        inputFahrenheit.value = resultFahrenheit;
        inputHasil.value = `${celciusValue} * (9/5) + 32 = ${resultFahrenheit} °F`;
    }
    else if(isNaN(celciusValue) && !isNaN(fahrenheitValue)){
        const resultCelcius = (fahrenheitValue - 32) * 5/9;
        inputCelcius.value = resultCelcius;
        inputHasil.value = `(${fahrenheitValue} - 32) * (5/9) = ${resultCelcius} °C`;
    }
} 

resetButton.addEventListener('click', resetInput);
function resetInput(){
    inputCelcius.value = '';
    inputFahrenheit.value = '';
    inputHasil.value = '';
}
