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
    return a / b;
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