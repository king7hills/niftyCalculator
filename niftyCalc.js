function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a*b;
};

function divide (a, b) {
    return a/b;
};

function plusMinus (a) {
    return a*-1;
}

function operate (operator, a, b) {
    if (operator == '+') {
       return add(a, b);
    } else if (operator == '-') {
       return subtract(a,b);
    } else if (operator == '*') {
       return multiply(a,b);
    } else if (operator == '/') {
       return divide(a,b);
    }
}
const dispArr = [];

const clear = document.querySelector('#clear');
clear.addEventListener("click", )
const plusminus = document.querySelector('#plusminus');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const minus = document.querySelector('#minus');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const plus = document.querySelector('#plus');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const enter = document.querySelector('#enter');

const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
