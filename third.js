"use strict";
// OOP
/**class Person {
 firstname: string;
 age: number;

 constructor(firstname: string, age: number) {
 this.firstname = firstname;
 this.age = age;
 }

 greet() {
 return `Hello ${this.firstname}`;
 }
 }

 const person = new Person("Asilbek", 20);
 console.log(person.greet());*/
/**class Person {
 public firstname: string;
 protected nationality: string;
 private age: number;

 constructor(firstname: string, age: number, nationality: string) {
 this.firstname = firstname;
 this.age = age;
 this.nationality = nationality;
 }

 public getAge(): number {
 return this.age;
 }

 public setAge(age: number): void {
 if (age < 0) {
 this.age = 0;
 } else {
 this.age = age;
 }
 }
 }

 const person = new Person('Asilbek', 20, 'Uzbek');
 person.setAge(20);
 console.log(person.getAge());

 person.setAge(-20);
 console.log(person.getAge());

 class Engineer extends Person {
 public technologies: string[];

 constructor(firstname: string, age: number, nationality: string, technologies: string[]) {
 super(firstname, age, nationality);
 this.technologies = technologies;
 }
 }

 const engineer = new Engineer('Asilbek', 20, 'Uzbek', ["JavaScript", "Typescript"]);
 console.log(engineer);*/
class Person {
    firstname;
    age;
    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }
    getName() {
        return this.firstname;
    }
}
class Engineer extends Person {
    technologies = [];
    constructor(firstname, age, technologies) {
        super(firstname, age);
        this.technologies = technologies;
    }
    getName() {
        return `Hello, I am an engineer and my name is ${this.firstname}.`;
    }
}
class Scientist extends Person {
    researches;
    constructor(firstname, age, researches) {
        super(firstname, age);
        this.researches = researches;
    }
    getName() {
        return `Hello, I am a Scientist, and my name is ${this.firstname}.`;
    }
}
const engineer = new Engineer('Asilbek', 20, ["java", "html"]);
const scentist = new Scientist('Ali', 45, ["java", "html"]);
const people = [engineer, scentist];
for (const p of people) {
    console.log(p.getName());
}
//# sourceMappingURL=third.js.map