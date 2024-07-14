function generateFibonacci(n) {
    let fibonacciSequence = [];
    if (n <= 0) {
        return fibonacciSequence;
    }
    let a = 0, b = 1;
    fibonacciSequence.push(a);
    for (let i = 1; i < n; i++) {
        fibonacciSequence.push(b);
        let next = a + b;
        a = b;
        b = next;
    }
    return fibonacciSequence;
}

console.log(generateFibonacci(0)); 
console.log(generateFibonacci(1)); 
console.log(generateFibonacci(2)); 
console.log(generateFibonacci(5)); 
console.log(generateFibonacci(10)); 
