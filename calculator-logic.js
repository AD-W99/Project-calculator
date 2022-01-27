let firstNum = null;
let secondNum = null;
let storedOperator;
let lastPairResult = null;
let currentNum = null;
let moreThanTwo = false;
let erase = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mutliply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "SYNTAX ERROR"
    } else {
        if ((a / b) % 1 != 0) {
            return (a / b).toFixed(2);
        } else {
            return a / b;
        }
    }
}

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    }
    if (operator === "-") {
        return subtract(a, b);
    }
    if (operator === "*") {
        return mutliply(a, b);
    }
    if (operator === "/") {
        return divide(a, b);
    }
}

function toDisplay(val) {
    if (erase) {
        document.getElementById("calcScreen").value = "";
        erase = false;
        firstNum = null;
        secondNum = null;
    }
    document.getElementById("calcScreen").value += val;
}

function toClear() {
    document.getElementById("calcScreen").value = "";
    firstNum = null;
    secondNum = null;
    currentNum = null;
    lastPairResult = null;
}

function toOperate(operator) {
    let temp;

    if (moreThanTwo === false) {
        if (firstNum === null) {
            temp = document.getElementById("calcScreen").value;
            firstNum = parseFloat(temp, 10);
            document.getElementById("calcScreen").value = "";
        } else if (secondNum === null) {
            temp = document.getElementById("calcScreen").value;
            secondNum = parseFloat(temp, 10);
            document.getElementById("calcScreen").value = "";
        }

        if (firstNum !== null && secondNum !== null) {
            document.getElementById("calcScreen").value = operate(firstNum, storedOperator, secondNum);
            lastPairResult = operate(firstNum, storedOperator, secondNum);
            moreThanTwo = true;
            erase = true;
        }
    } else {
        if (currentNum === null) {
            temp = document.getElementById("calcScreen").value;
            currentNum = parseFloat(temp, 10);
            document.getElementById("calcScreen").value = "";
        }

        if (currentNum !== null && lastPairResult !== null) {
            document.getElementById("calcScreen").value = operate(lastPairResult, storedOperator, currentNum);
            lastPairResult = operate(lastPairResult, storedOperator, currentNum);
            console.log(currentNum);
            console.log(lastPairResult);
            currentNum = null;
            erase = true;
        }
    }

    storedOperator = operator;
}

function finalResult() {
    let temp;

    if (firstNum === null && secondNum === null) {
        return;
    }

    if (moreThanTwo === false) {
        if (secondNum === null) {
            temp = document.getElementById("calcScreen").value;
            secondNum = parseFloat(temp, 10);
            document.getElementById("calcScreen").value = "";
        }

        if (firstNum !== null && secondNum !== null) {
            document.getElementById("calcScreen").value = operate(firstNum, storedOperator, secondNum);
            erase = true;
        }
    } else {
        if (currentNum === null) {
            temp = document.getElementById("calcScreen").value;
            currentNum = parseFloat(temp, 10);
            document.getElementById("calcScreen").value = "";
        }

        if (currentNum !== null && lastPairResult !== null) {
            document.getElementById("calcScreen").value = operate(lastPairResult, storedOperator, currentNum);
            lastPairResult = operate(lastPairResult, storedOperator, currentNum);
            currentNum = null;
            moreThanTwo = false;
            erase = true;
        }
    }

    if (lastPairResult) {
        lastPairResult = null;
    }
}