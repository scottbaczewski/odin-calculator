// Math functions
const operations = {
"+": (a,b) => a + b,
"-": (a,b) => a - b,
"*": (a,b) => a * b,
"/": (a,b) => a / b,
};

const operation = "/";

// operation variables
const firstVar = 9;
const operator = operations[operation];
const secondVar = 3;

// result
function operate() {
    if (operation && firstVar != 0 && secondVar !=0) {
        const result = operator(firstVar,secondVar);
        console.log(result);
    }
}
operate()