

let rangeSelector = document.getElementById('range-selector');
let numberSelector = document.getElementById('number-selector');
let includeUppercaseElement = document.getElementById('uppercase-checkbox');
let includeNumbersElement = document.getElementById ('number-checkbox');
let includeSymbolsElement = document.getElementById ('symbol-checkbox');
let LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
let UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
let NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
let SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(
 arrayFromLowToHigh(123,126)
)
let form = document.getElementById('password-generator');
let passwordDisplay = document.getElementById('password-display');




numberSelector.addEventListener('input',syncAmountSelector);
rangeSelector.addEventListener('input',syncAmountSelector);

form.addEventListener('submit', e => {
    e.preventDefault()
    amountOption = numberSelector.value
    includeUppercase = includeUppercaseElement.checked
    includeNumbers = includeNumbersElement.checked
    includeSymbols = includeSymbolsElement.checked
    let password = generatePassword(amountOption , includeUppercase, includeNumbers,includeSymbols)
    passwordDisplay.innerText = password
})



function generatePassword(amountOption,includeUppercase,includeNumbers,includeSymbols){
let charCodes = LOWERCASE_CHAR_CODES
if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
 if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
 if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

 let passwordCharacter = []

for(let i = 0; i < amountOption; i++){
let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
passwordCharacter.push(String.fromCharCode(characterCode))
}
return passwordCharacter.join('')
}

function arrayFromLowToHigh(low, high){
    let array = []
    for(let i = low; i <= high; i++){
        array.push(i)

    }
    return array
}


function syncAmountSelector(e){
    let value = e.target.value
    numberSelector.value = value
    rangeSelector.value = value

}

