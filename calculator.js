let num1 = document.getElementById(num1);
let num2 = document.getElementById(num2);
let ops = document.getElementById(ops);
let num1num = parseFloat(num1.value);
let num2num = parseFloat(num2.value);
let answer = document.getElementById(mainAnswer);

function calc() {
switch (ops) {
    case `+`:
    result = `$(parseFloat(num1) + parseFloat(num2))`    
        break;

    default:
        break;
}
return result;
}