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
let operated = false;

numberButtons.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
        let value = target.textContent;
        if (!operator && !operated) {
        firstVar += value;
        outputFirstVar.textContent = firstVar;
    }else if (!operator && operated) {
        firstVar == '';
        outputFirstVar.textContent == '';
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
            operated = false;
            })
        } else if (target.textContent == '=') {
            operate();
        } else {
            let value = target.textContent;
            operator = value;
            outputOperator.textContent = operator;
            operated = true;
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
    if (operator == '/' && secondVar == 0){
        outputFirstVar.textContent = 'Hey! No dividing by 0!';
        firstVar = '';
        secondVar = '';
        operator = '';
        outputOperator.textContent = '';
        outputSecondVar.textContent = '';
    } else if (operator && firstVar && secondVar) {
        let op = operations[operator];
        const result = op(Number(firstVar),Number(secondVar));
        resultOutput = result.toFixed(2);
        firstVar = result.toFixed(2);
        secondVar = '';
        operator = '';
        outputFirstVar.textContent = result.toFixed(2);
        outputOperator.textContent = '';
        outputSecondVar.textContent = '';
    } else {
        outputFirstVar.textContent = 'Please enter firstVar, operator, and secondVar';
        firstVar = '';
        secondVar = '';
        operator = '';
        outputOperator.textContent = '';
        outputSecondVar.textContent = '';
    }
}