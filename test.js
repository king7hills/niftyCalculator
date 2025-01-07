console.log('test')

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
};

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
};
const dispArr = [];