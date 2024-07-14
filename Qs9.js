function filterEvenNumbers(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    return oddNumbers;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(numbers)); 

let moreNumbers = [2, 4, 6, 8, 10];
console.log(filterEvenNumbers(moreNumbers)); 
