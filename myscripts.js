// output-buttons
const output = document.querySelector('div.output');
const numberButtons = document.querySelector('div.numbers');
const operatorButtons = document.querySelector('div.operators');

// operation variables
let firstVar = '';
let operator = '';
let secondVar = '';
let resultOutput = '';

numberButtons.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
        let value = target.textContent
        if (!operator) {
        firstVar += value;
    } else if (operator)
        secondVar += value;
}
    console.log(firstVar,secondVar);
})

operatorButtons.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) { 
        if (target.textContent == 'clear') {
            firstVar = '';
            operator = '';
            secondVar = '';
            resultOutput = '';
        } else if (target.textContent == '=') {
            operate()
        } else {
        let value = target.textContent
        operator = value;
        }
    }
    console.log(operator)
})

output.textContent = `${firstVar} ${operator} ${secondVar}\n${resultOutput}`;
console.log(firstVar,operator,secondVar,resultOutput);
// Math functions
const operations = {
"+": (a,b) => a + b,
"-": (a,b) => a - b,
"*": (a,b) => a * b,
"/": (a,b) => a / b,
};

// result
function operate() {
    if (operator && firstVar != 0 && secondVar !=0) {
        let op = operations[operator];
        const result = op(firstVar,secondVar);
        resultOutput = result;
        firstVar = result;
        console.log(result);
    }
}