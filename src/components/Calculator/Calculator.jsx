

const calculator = "n1, n2";

function add(n1, n2) {
    return Number(n1) + Number(n2);
}

function multiply(n1, n2) {
    return n1 * n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

export default calculator;

export { add, multiply, subtract, divide };