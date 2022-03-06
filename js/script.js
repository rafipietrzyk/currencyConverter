console.log("Witam Cię w moim świecie. Pozdrawiam! Rafał Pietrzyk.");

let form = document.querySelector(".js-form");
let inputAmount = document.querySelector(".js-form__inputAmount");
let convertedAmount = document.querySelector(".js-form__strongConvertedAmount");
let currencyName = document.querySelector(".js-form__strongCurrencyName");
let elementFrom = document.querySelector(".js-form__selectElementFrom");
let elementTo = document.querySelector(".js-form__selectElementTo");
let result = 0;
const PLN = "PLN";
const EUR = "EUR";
const USD = "USD";
const RATE_EUR = 4.90;
const RATE_USD = 4.48;
const ERROR_MESSAGE = "Kwota musi być podana, oraz kody walut nie mogą być takie same";
const EMPTY_MESSAGE = "";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (elementFrom.value === PLN && elementTo.value === EUR) {
        result = inputAmount.value * (1 / RATE_EUR); // 0,20
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = EUR;
    }
    else if (elementFrom.value === PLN && elementTo.value === USD) {
        result = inputAmount.value * (1 / RATE_USD); // 0,22
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = USD;
    }
    else if (elementFrom.value === EUR && elementTo.value === PLN) {
        result = inputAmount.value * RATE_EUR; // 4,90
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = PLN;
    }
    else if (elementFrom.value === USD && elementTo.value === PLN) {
        result = inputAmount.value * RATE_USD; // 4,48
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = PLN;
    }
    else if (elementFrom.value === EUR && elementTo.value === USD) {
        result = inputAmount.value * 1.09; // 1,09
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = USD;
    }
    else if (elementFrom.value === USD && elementTo.value === EUR) {
        result = inputAmount.value * 0.91; // 0,91
        convertedAmount.innerText = result.toFixed(2);
        currencyName.innerText = EUR;
    }
    else {
        convertedAmount.innerText = ERROR_MESSAGE;
        currencyName.innerText = EMPTY_MESSAGE;
    }
});

