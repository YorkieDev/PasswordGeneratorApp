//These variables are for the different selectable elements in the password generator app.
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//This variable is used to help with the randomization of the password generator.
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol)
    

})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    
    
}


//This function is used to generate a random lowercase letter. 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//This function is used to generate a random uppercase letter.
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//This function is used to generate a random number between 0 and 10. 
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}


//This function is used to generate a random symbol from the given array. 
function getRandomSymbol() {
    const symbols = '!@#$%^&*()_-+={[}]|\:;"<,>.?/'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

