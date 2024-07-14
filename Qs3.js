function flattenArray(nestedArray) {
    let flattened = [];

    function flatten(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flatten(item); 
            } else {
                flattened.push(item); 
            }
        });
    }

    flatten(nestedArray); 
    return flattened;
}


console.log(flattenArray([1, [2, [3, 4], 5], [6, 7]]));
console.log(flattenArray([[1, 2, [3]], 4, [5, [6, [7, 8]]]]));
