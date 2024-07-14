class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

let hashMap = new HashMap();

hashMap.put("apple", 5);
hashMap.put("banana", 10);
hashMap.put("orange", 15);

console.log(hashMap.get("apple"));
console.log(hashMap.get("banana")); 
console.log(hashMap.get("grape")); 

hashMap.remove("banana");
console.log(hashMap.get("banana")); 
