"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
function greeting(firstname) {
    return `Hello ${firstname}`;
}
console.log(greeting('Asilbek'));
function printGreeting(firstname) {
    console.log(`Hello ${firstname}`);
}
printGreeting('Asilbek');
// Implementation signature
function sayHello(name) {
    if (typeof name === 'string') {
        return `Hello ${name}`;
    }
    else if (Array.isArray(name)) {
        return name.map(name => `Hello ${name}`);
    }
    throw new Error(`${name} is not a string`);
}
function greet(person) {
    return `Hello ${person.name}`;
}
const person = {
    name: 'Asilbek',
    age: 20,
    telegramUserName: '@asilbek',
    id: 123
};
function updatePerson(person) {
    console.log(`prop has the value '${person.id}'.`);
    person.age = 20; // True
    // person.id = 1234 //We can't change
}
//# sourceMappingURL=second.js.map