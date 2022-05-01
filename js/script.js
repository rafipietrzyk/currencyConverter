console.log("Witam Cię w moim świecie. Pozdrawiam! Rafał Pietrzyk.");

let form = document.querySelector(".js-form");
let inputAmount = document.querySelector(".js-form__inputAmount");
let convertedAmount = document.querySelector(".js-form__strongConvertedAmount");
let currencyName = document.querySelector(".js-form__strongCurrencyName");
let elementFrom = document.querySelector(".js-form__selectElementFrom");
let elementTo = document.querySelector(".js-form__selectElementTo");

const PLN = "PLN";
const EUR = "EUR";
const USD = "USD";

const RATE_PLN = 1;
const RATE_EUR = 4.68;
const RATE_USD = 4.43;

let rateFirst;
let rateSecound;
let result;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (elementFrom.value) {
        case PLN:
            rateFirst = RATE_PLN;
            break;
        case EUR:
            rateFirst = RATE_EUR;
            break;
        case USD:
            rateFirst = RATE_USD;
            break;
    }

    switch (elementTo.value) {
        case PLN:
            rateSecound = RATE_PLN;
            break;
        case EUR:
            rateSecound = RATE_EUR;
            break;
        case USD:
            rateSecound = RATE_USD;
            break;
    }

    result = (inputAmount.value * rateFirst) / rateSecound;
    convertedAmount.innerText = result.toFixed(2);
    currencyName.innerText = elementTo.value;

});

