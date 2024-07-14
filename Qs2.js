function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');
    let currentNumber = '';
    let result = 0;
    let sign = 1;

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else if (char === '+' || char === '-') {
            if (currentNumber !== '') {
                result += sign * parseInt(currentNumber, 10);
                currentNumber = '';
            }
            sign = char === '+' ? 1 : -1;
        }
    }

    if (currentNumber !== '') {
        result += sign * parseInt(currentNumber, 10);
    }

    return result;
}

console.log(evaluateExpression("3 + 5 - 2")); 
console.log(evaluateExpression("10 - 4 + 2")); 
console.log(evaluateExpression("7 + 8 - 5 + 1")); 
