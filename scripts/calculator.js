// append number clicked to display paragraph's number
const appendNumber = function() {
    // if display is currently 0, delete it when new number clicked
    if (displayedNumber.textContent == 0) { 
        displayedNumber.textContent = '';
    }
    displayedNumber.textContent += this.getAttribute('id');
}

const add = function() {
    calcNumber = num1 + num2;
    storedNumber.textContent = calcNumber;
    num1 = calcNumber;
    displayedNumber.textContent = 0;
}

const subtract = function() {
    calcNumber = num1 - num2;
    storedNumber.textContent = calcNumber;
    num1 = calcNumber;
    displayedNumber.textContent = 0;
}

const multiply = function() {
    calcNumber = num1 * num2;
    storedNumber.textContent = calcNumber;
    num1 = calcNumber;
    displayedNumber.textContent = 0;
}

const divide = function() {
    if (num2 != 0) {
        calcNumber = num1 / num2;
        storedNumber.textContent = calcNumber;
        num1 = calcNumber;
        displayedNumber.textContent = 0;
    } else {
        console.log('oops, you divided by zero');
    }
}

const clear = function() {
    displayedNumber.textContent = 0;
}

const clearEverything = function() {
    displayedNumber.textContent = 0;
    storedNumber.textContent = 0;
    num1 = 0;
    num2 = 0;
    calcNumber = 0;
    operatorInput = ' ';
    input = ' ';
}

const storeFirstNum = function() {
    num1 = parseFloat(displayedNumber.textContent);
    storedNumber.textContent = num1;
    displayedNumber.textContent = 0;
    operatorInput = input;
}

const storeSecondNum = function() {
    num2 = parseFloat(displayedNumber.textContent);
}

const checkIfCalc = function() {
    input = this.getAttribute('id'); // get id of button pressed

    if (input == 'c' || input == 'ce') { // pass directly to operate function to clear
        operate(input);
    } else if (num1 == 0) { // store first number and bypass operate function
        storeFirstNum();
    } else { // parse second number from display, then pass the operator pressed to operate function
        storeSecondNum();
        operate(input);
    }
}

const operate = function(passedInput) {
    switch (operatorInput) {
        case 'c':
            clear();
            break;
        case 'ce':
            clearEverything();
            break;
        case '*':
        case 'divide':
        case '+':
        case '-':
        case '=':
            switch (operatorInput) { // this switch seems unnecessary, but it allows 
                case '*':            // the '=' button to access the math functions
                    multiply();      // based on the PREVIOUS operator selected
                    break;           // which is necessary to chain operations together
                case 'divide':       // without pressing the '=' button
                    divide();
                    break;
                case '+':
                    add();
                    break;
                case '-':
                    subtract();
                    break;
            }
            break;
        default:
            console.log('oops, something went wrong');
    }
    operatorInput = passedInput; // change the function called by the NEXT operator input
                                 // this has to happen AFTER the math has been done on the 
                                 // two numbers input
}

// add event listener to each number button
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(numButton => numButton.addEventListener('click', appendNumber));

// add event listener to each operation button
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach(opButton => opButton.addEventListener('click', checkIfCalc));

// add p elements for manipulation
const displayedNumber = document.getElementById('displayNumber');
const storedNumber = document.getElementById('storedNumber');

// declare global variables used in multiple functions
let operatorInput = ' ';
let num1 = 0;
let num2 = 0;
let calcNumber = 0;
let input = ' ';