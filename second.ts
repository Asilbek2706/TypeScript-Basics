function add(a: number, b: number) {
    return a + b;
}

console.log(add(2, 3));

function greeting(firstname: string): string {
    return `Hello ${firstname}`;
}

console.log(greeting('Asilbek'));

function printGreeting( firstname: string): void {
    console.log(`Hello ${firstname}`);
}

printGreeting('Asilbek');

// function sayHello(name: string): string {
//     return `Hello ${name}`;
// }

// Overload
function sayHello(name: string): string;
function sayHello(name: string[]): string[];
// Implementation signature
function sayHello(name: unknown): unknown {
    if (typeof name === 'string') {
        return `Hello ${name}`;
    } else if (Array.isArray(name)) {
        return name.map(name => `Hello ${name}`);
    }
    throw new Error(`${name} is not a string`);
}

//Interface
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return `Hello ${person.name}`;
}

interface Person {
    name: string;
    age: number;
    telegramUserName?: string;
}

interface Person1 {
    name: string;
    age: number;
    telegramUserName?: string;
    readonly id: number;
}

const person: Person1 = {
    name: 'Asilbek',
    age: 20,
    telegramUserName: '@asilbek',
    id: 123
};

function updatePerson(person: Person1) {
    console.log(`prop has the value '${person.id}'.`)

    person.age = 20 // True
    // person.id = 1234 //We can't change
}

