function toTitleCase(str) {
        let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    let titleCaseString = words.join(' ');

    return titleCaseString;
}

console.log(toTitleCase("hello world")); 
console.log(toTitleCase("javascript is awesome")); 
console.log(toTitleCase("capitalize the first letter")); 
console.log(toTitleCase("  leading and trailing spaces  "));
console.log(toTitleCase("")); 
