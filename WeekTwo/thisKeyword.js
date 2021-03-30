"use strict";
// function sayHi(){
//     console.log(this);
// }
// sayHi();

// let user = {
//     firstName : "John",
//     lastName: "Smith",
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// const fullname = user.getFullName();
// console.log(fullname);

//two way to create object in JS
// const person1 = {
//     name: "Asgedom",
//     age: 23
// }
// console.log(typeof (Person1));
// console.log(person1.name);
// console.log(person1.age);

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.draw = function(){
//         return this.name;
//         }
// }
// const person = new Person("Asgedom", 25);
// console.log(person.age);
// console.log(person.name);
// console.log(person.draw());
// console.log(typeof(person));

let now = new Date();
let date = new Date("2021-03-28");
console.log(now);
console.log(date);
console.log(now.getDay);
const p = {
    name: "Asgedom",
    birthDate: "2020-9-10",
    getAge: function(){
        const today = new Date();
        let result;
        result = this.birthDate - today.getDay();
        return result;
    }
}
console.log(p.getAge()bg);