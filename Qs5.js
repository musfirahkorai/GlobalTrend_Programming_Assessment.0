function removeDuplicates(arr) {
    let uniqueArray = [...new Set(arr)];
    return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])); 
console.log(removeDuplicates(["apple", "orange", "banana", "orange", "apple"])); 
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 1, 1, 1, 1])); 
