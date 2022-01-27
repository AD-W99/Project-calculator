let operandsArray = new Array(null, null);
let index = 0;
let storedOperator = "";
let operatorPressed = false;

function stringToFloat() {
    operandsArray[0] = parseFloat(operandsArray[0], 10);
    operandsArray[1] = parseFloat(operandsArray[1], 10);
}

function add() {
    stringToFloat();
    return operandsArray[0] + operandsArray[1];
}

function subtract() {
    stringToFloat();
    return operandsArray[0] - operandsArray[1];
}

function mutliply() {
    stringToFloat();
    return operandsArray[0] * operandsArray[1];
}

function divide() {
    stringToFloat();
    if (operandsArray[1] == 0) {
        return "SYNTAX ERROR";
    } else {
        if ((operandsArray[0] / operandsArray[1]) % 1 != 0) { // Used to round answers with long decimals.
            return (operandsArray[0] / operandsArray[1]).toFixed(2);
        } else {
            return operandsArray[0] / operandsArray[1];
        }
    }
}

function fillArray() {
    operandsArray[index] = document.getElementById("calcScreen").value;
}

function toDisplay(num) {
    if (operatorPressed) { // Used to erase the value in calculator display for next value.
        document.getElementById("calcScreen").value = "";
        operatorPressed = false;
    }
    document.getElementById("calcScreen").value += num;
    fillArray(); // Takes value in calculator display and places it into operandsArray.
}

function toOperate(operator) {
    operatorPressed = true;

    if(index == 0) {
        index++;
    }

    if (operandsArray[0] != null && operandsArray[1] != null) {
        document.getElementById("calcScreen").value = "";
        document.getElementById("calcScreen").value = operate(storedOperator);
    }

    storedOperator = operator;
}

function operate(operator) { // Performs operation for each pair of values.
    if (operator === "+") {
        operandsArray[0] = add();
        operandsArray[1] = null;
        return operandsArray[0];
    }
    if (operator === "-") {
        operandsArray[0] = subtract();
        operandsArray[1] = null;
        return operandsArray[0];
    }
    if (operator === "*") {
        operandsArray[0] = mutliply();
        operandsArray[1] = null;
        return operandsArray[0];
    }
    if (operator === "/") {
        operandsArray[0] = divide();
        operandsArray[1] = null;
        return operandsArray[0];
    }
}

function result() {
    if (operatorPressed || operandsArray[0] == null || operandsArray[1] == null) {
        return; // Prevents user from activating result function before it is appropriate.
    }
    document.getElementById("calcScreen").value = "";
    document.getElementById("calcScreen").value = operate(storedOperator);
}

function toClear() {
    operandsArray[0] = null;
    operandsArray[1] = null;
    index = 0;
    document.getElementById("calcScreen").value = "";
}