const calculateDol = 27.3;
const calculateEur = 29;
const calculatePln = 6.15;
const calculateRub = 3.59;
const calculateGbp = 30.9;

const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener("click", function () {
    const input = document.getElementById('result').value;
    if (input === null) {
        return
    }

    const selected = document.getElementById('currencySelecter').value;

    let currencyCours;
    switch (selected) {
        case 'USD':
            currencyCours = calculateDol
            break
        case 'EUR':
            currencyCours = calculateEur
            break
        case 'PLN':
            currencyCours = calculatePln
            break
        case 'RUB':
            currencyCours = calculateRub
            break
        case 'GBP':
            currencyCours = calculateGbp
    }
    debugger

    let calculateCurrency = currencyCours * input
    calculateCurrency = Math.floor(calculateCurrency)
    document.getElementById('outputGrn').innerHTML = calculateCurrency;

});

