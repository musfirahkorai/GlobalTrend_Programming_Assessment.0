function areAnagrams(str1, str2) {    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyMap1 = {};
    const frequencyMap2 = {};

    for (let char of str1) {
        frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }

    for (let char of str2) {
        frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
    }


    for (let char in frequencyMap1) {
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("triangle", "integral")); 
console.log(areAnagrams("hello", "world")); 
console.log(areAnagrams("Hello", "hello"));
console.log(areAnagrams("hello world", "world hello"));
