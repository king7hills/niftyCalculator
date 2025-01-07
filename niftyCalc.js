//Button connections
const clear = document.querySelector('#clearButton');
const plusminus = document.querySelector('#plusminusButton');
const divide = document.querySelector('#divideButton');
const multiply = document.querySelector('#multiplyButton');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const minus = document.querySelector('#minus');

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
    return (a + b);
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

function operate (operator, a, b) {
    if (operator == '+') {
       return add(a, b);
    } else if (operator == '-') {
       return subtract(a,b);
    } else if (operator == '*') {
       return timesNums(a,b);
    } else if (operator == '/') {
       return divNums(a,b);
    }
};

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
function operatorPress (input) {
    storeDispValue();
    storeOperator(input);
    digitPanel.addEventListener("click", () => clearDisp(), {once: true});
}

divide.addEventListener("click", () => operatorPress('/'));
// multiply.addEventListener("click", () => operatorPress('*'));
// plus.addEventListener("click", () => operatorPress('+'));
// minus.addEventListener("click", () => operatorPress('-'));

function clearPress () {
    clearDisp();
    dispValue = '';
    whichOp = '';
};

clear.addEventListener("click", () => clearPress());