let form = document.querySelector(".js-form");
let inputAmount = document.querySelector(".js-form__inputAmount");
let convertedAmount = document.querySelector(".js-form__strongConvertedAmount");
let currencyName = document.querySelector(".js-form__strongCurrencyName");
let elementFrom = document.querySelector(".js-form__selectElementFrom");
let elementTo = document.querySelector(".js-form__selectElementTo");

const PLN = "PLN";
const EUR = "EUR";
const USD = "USD";
const GBP = "GBP";
const CHF = "CHF";

const RATE_PLN = 1;
const RATE_EUR = 4.69;
const RATE_USD = 4.46;
const RATE_GBP = 5.57;
const RATE_CHF = 4.56;

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
        case GBP:
            rateFirst = RATE_GBP;
            break;
        case CHF:
            rateFirst = RATE_CHF;
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
        case GBP:
            rateSecound = RATE_GBP;
            break;
        case CHF:
            rateSecound = RATE_CHF;
            break
    }

    result = (inputAmount.value * rateFirst) / rateSecound;
    convertedAmount.innerText = result.toFixed(2);
    currencyName.innerText = elementTo.value;

});

