function capitalizeWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let capitalizedString = words.join(' ');

    return capitalizedString;
}

console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("javascript is awesome")); 
console.log(capitalizeWords("capitalize the first letter")); 
console.log(capitalizeWords("  leading and trailing spaces  "));
console.log(capitalizeWords("")); 
