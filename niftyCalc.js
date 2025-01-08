//Button connections
const clear = document.querySelector('#clearButton');
const plusminus = document.querySelector('#plusminusButton');
const divide = document.querySelector('#divideButton');
const multiply = document.querySelector('#multiplyButton');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const minus = document.querySelector('#minusButton');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const plus = document.querySelector('#plusButton');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const enter = document.querySelector('#enter');

const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');

//Basic calculation functions
function add (a, b) {
    return (Number(a) + Number(b));
};

function subtract (a, b) {
    return (a - b);
};

function timesNums (a, b) {
    return (a*b);
};

function divNums (a, b) {
    return (a/b);
};

//Display initialization
const numDisplay = document.querySelector('#digitWindow');

function displayNum (num) {
    numDisplay.textContent += (`${num}`);
};
let displayCleared = true;

function digitEventLogic (digit) {
    if (displayCleared == false) {
        clearDisp();
        displayCleared = true;
        if (numDisplay.textContent.length == 12) {}
        else {displayNum(digit)}
    } else if (displayCleared == true) {
        if (numDisplay.textContent.length == 12) {}
        else {displayNum(digit)}
    };
}
//display event listeners (Number Buttons)
seven.addEventListener("click", () => digitEventLogic(7));
eight.addEventListener("click", () => digitEventLogic(8));
nine.addEventListener("click", () => digitEventLogic(9));

four.addEventListener("click", () => digitEventLogic(4));
five.addEventListener("click", () => digitEventLogic(5));
six.addEventListener("click", () => digitEventLogic(6));

one.addEventListener("click", () => digitEventLogic(1));
two.addEventListener("click", () => digitEventLogic(2));
three.addEventListener("click", () => digitEventLogic(3));
zero.addEventListener("click", () => digitEventLogic(0));

decimal.addEventListener("click", () => digitEventLogic('.'));

//sign function and event listener
function makeDispNegative () {
    if (numDisplay.textContent.includes('-')) {
        numDisplay.textContent = numDisplay.textContent.replace('-', '');
    } else numDisplay.textContent = '-' + numDisplay.textContent;
};

plusminus.addEventListener("click", () => makeDispNegative());

//operator button functions
let dispValue = '';
function storeDispValue () {
    dispValue = numDisplay.textContent;
}

let whichOp = ''
function storeOperator (Op) {
    whichOp = Op;
}

function clearDisp () {
    numDisplay.textContent = '';
};

//Function and listeners for operators.
//Current challenge is clearing the display before typing the next number.
function operatorPress (input) {
    if (whichOp == input && dispValue != '' && displayCleared == false) {
        {}} 
    else if (whichOp == input && dispValue != '' && displayCleared == true) {
        operate(whichOp, dispValue, numDisplay.textContent);
        operatorPress(input);
    } else if (whichOp != input && dispValue != '' && displayCleared == true) {
        operate(whichOp, dispValue, numDisplay.textContent);
        operatorPress(input);
    } else {
    storeDispValue();
    storeOperator(input);
    displayCleared = false;
    }
}

divide.addEventListener("click", () => operatorPress('/'));
multiply.addEventListener("click", () => operatorPress('*'));
plus.addEventListener("click", () => operatorPress('+'));
minus.addEventListener("click", () => operatorPress('-'));

//clear function
function clearPress () {
    clearDisp();
    dispValue = '';
    whichOp = '';
    newDisp = '';
    displayCleared = true;
};

clear.addEventListener("click", () => clearPress());

//Operate function which performs the actual math based on the stored operator.
//This function saves the result for further operation until cleared.

let newDisp = '';
function opUpdate () {
    numDisplay.textContent = newDisp;
    whichOp = '';
    dispValue = '';
    displayCleared = false;
};
function adjustLength (func) {
    if (func.toString().length >= 12) {
        newDisp = parseFloat(func.toPrecision(11));
    } else {newDisp = func;}
}
function operate (operator, a, b) {
    if (operator == '+') {
        adjustLength(add(a, b));
        opUpdate();
    } else if (operator == '-') {
        adjustLength(subtract(a, b));
        opUpdate();
    } else if (operator == '*') {
        adjustLength(timesNums(a, b));
        opUpdate();
    } else if (operator == '/') {
        adjustLength(divNums(a, b));
        opUpdate();
    }
};

enter.addEventListener("click", () => operate(whichOp, dispValue, numDisplay.textContent));