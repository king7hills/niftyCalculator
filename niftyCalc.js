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

//display event listeners (Number Buttons)
seven.addEventListener("click", () => displayNum(7));
eight.addEventListener("click", () => displayNum(8));
nine.addEventListener("click", () => displayNum(9));

four.addEventListener("click", () => displayNum(4));
five.addEventListener("click", () => displayNum(5));
six.addEventListener("click", () => displayNum(6));

one.addEventListener("click", () => displayNum(1));
two.addEventListener("click", () => displayNum(2));
three.addEventListener("click", () => displayNum(3));
zero.addEventListener("click", () => displayNum(0));

decimal.addEventListener("click", () => displayNum('.'));

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

const digitPanel = document.querySelector('#digits');

//Function and listeners for operators.
//Current challenge is clearing the display before typing the next number.
function operatorPress (input) {
    //condition for pressing multiple operators without pressing enter
    if (whichOp != '') {
        let newOp = whichOp
        if (whichOp == newOp) {
        } else {
            operate(whichOp, dispValue, numDisplay.textContent);
            operatorPress(input);
        };
    } else {
    storeDispValue();
    storeOperator(input);
    
    digitPanel.addEventListener("click", () => clearDisp(), {once: true});
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
};

clear.addEventListener("click", () => clearPress());

//Operate function which performs the actual math based on the stored operator.
//This function saves the result for further operation until cleared.

let newDisp = '';
function opUpdate () {
    numDisplay.textContent = newDisp;
    whichOp = '';
};

function operate (operator, a, b) {
    if (operator == '+') {
        newDisp = add(a, b);
        opUpdate();
    } else if (operator == '-') {
        newDisp = subtract(a,b);
        opUpdate();
    } else if (operator == '*') {
        newDisp = timesNums(a,b);
        opUpdate();
    } else if (operator == '/') {
        newDisp = divNums(a,b);
        opUpdate();
    }
};

enter.addEventListener("click", () => operate(whichOp, dispValue, numDisplay.textContent));

//Conditional calculator logic
