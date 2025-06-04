// ---for loop---
const name = "JavaScript";

let text = ""

for (let ch of name) {
    text += ch;
}

// console.log(text);


// ---Map---

const fruits = new Map([
    ["apple", 100],
    ["banana", 200],
    ["cherry", 300],
]);

// console.log(fruits);
// console.log(fruits.get("banana"));

// ---Set---

const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("d");
letters.add("a"); // Duplicate, will not be added
letters.add("c");
// console.log(letters);

// ---Class---

class Superhero {
    constructor(name, ability) {
        this.name = name;
        this.ability = ability;
    }
}

sup1 = new Superhero("Superman", "Flight");
sup2 = new Superhero("Batman", "Intelligence");
console.log(sup1, sup2);