// output-buttons
const output = document.querySelectorAll('div.output > p');
const outputFirstVar = document.querySelector('p.outputFirstVar');
const outputOperator = document.querySelector('p.outputOperator');
const outputSecondVar = document.querySelector('p.outputSecondVar');
const numberButtons = document.querySelector('div.numbers');
const operatorButtons = document.querySelector('div.operators');
const htmlOutputFirstVar = document.querySelector('p.outputFirstVar');


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
        outputFirstVar.textContent = firstVar;
    } else if (operator)
        secondVar += value;
        outputSecondVar.textContent = secondVar;
}
})

operatorButtons.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) { 
        if (target.textContent == 'clear') {
            firstVar = '';
            operator = '';
            secondVar = '';
            resultOutput = '';
            output.forEach(element => {
                element.textContent = '';
            })
        } else if (target.textContent == '=') {
            operate();
        } else {
            let value = target.textContent;
            operator = value;
            outputOperator.textContent = operator;
        }
    }
})

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
        const result = op(Number(firstVar),Number(secondVar));
        resultOutput = result;
        firstVar = result;
        secondVar = '';
        outputFirstVar.textContent = result;
        outputOperator.textContent = '';
        outputSecondVar.textContent = '';
    }
}