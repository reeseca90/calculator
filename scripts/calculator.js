

// append number clicked to display paragraph's number
const appendNumber = function() {
    // if disply is currently 0, delete it when new number clicked
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
    operatorInput = ' ';
}

const subtract = function() {
    calcNumber = num1 - num2;
    storedNumber.textContent = calcNumber;
    num1 = calcNumber;
    displayedNumber.textContent = 0;
    operatorInput = ' ';
}

const multiply = function() {
    calcNumber = num1 * num2;
    storedNumber.textContent = calcNumber;
    num1 = calcNumber;
    displayedNumber.textContent = 0;
    operatorInput = ' ';
}

const divide = function() {
    if (num2 != 0) {
        calcNumber = num1 / num2;
        storedNumber.textContent = calcNumber;
        num1 = calcNumber;
        displayedNumber.textContent = 0;
        operatorInput = ' ';
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
    operatorInput = ' ';
}

const storeFirstNum = function() {
    num1 = parseFloat(displayedNumber.textContent);
    storedNumber.textContent = num1;
    displayedNumber.textContent = 0;
    operatorInput = input;
}

const operate = function() {
    input = this.getAttribute('id'); // get id of button pressed
        switch (input) {
            case 'c':
                clear();
                break;
            case 'ce':
                clearEverything();
                break;
            case '*':
                storeFirstNum();
                break;
            case 'divide':
                storeFirstNum();
                break;
            case '+':
                storeFirstNum();
                break;
            case '-':
                storeFirstNum();
                break;
            case '=':
                if (operatorInput != ' ') {
                    num2 = parseFloat(displayedNumber.textContent);
                    switch (operatorInput) {
                        case '*':
                            multiply();
                            break;
                        case 'divide':
                            divide();
                            break;
                        case '+':
                            add();
                            break;
                        case '-':
                            subtract();
                            break;
                    }   
                } else {
                    console.log('oops, hit equals without an operator');
                }
                break;
            default:
                console.log('oops, something went wrong');
    }
}

// add event listener to each number button
const numButtons = document.querySelectorAll('.number');
numButtons.forEach(numButton => numButton.addEventListener('click', appendNumber));

// add event listener to each operation button
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach(opButton => opButton.addEventListener('click', operate));

// add p elements for manipulation
const displayedNumber = document.getElementById('displayNumber');
const storedNumber = document.getElementById('storedNumber');

let operatorInput = ' ';
let num1 = 0;
let num2 = 0;
let calcNumber = 0;
let input = ' ';