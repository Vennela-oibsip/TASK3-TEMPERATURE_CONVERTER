function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.querySelector('input[name="unit"]:checked').value;
    let result;

    if (isNaN(inputValue)) {
        result = "Please enter a valid number";
    } else {
        switch (inputUnit) {
            case 'celsius':
                result = `${inputValue}°C = ${(inputValue * 9/5 + 32).toFixed(2)}°F = ${(inputValue + 273.15).toFixed(2)}K`;
                break;
            case 'fahrenheit':
                result = `${inputValue}°F = ${((inputValue - 32) * 5/9).toFixed(2)}°C = ${((inputValue - 32) * 5/9 + 273.15).toFixed(2)}K`;
                break;
            case 'kelvin':
                result = `${inputValue}K = ${(inputValue - 273.15).toFixed(2)}°C = ${((inputValue - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
            default:
                result = "Please select a valid unit";
        }
    }

    document.getElementById('result').innerText = result;
}
