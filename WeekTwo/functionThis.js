"use strict";
let user ={
    firstName: "john",
    lastName: "Alem",
    getFullName: function (){
        return this.firstName + " "+ this.lastName;
    }
};
let fullName = user.getFullName();
console.log(fullName);


//two ways to create object in JS
//Object literal
// creates a single object

const person1 = {
    name : "john",
    age : 26,
}
console.log(person1);
console.log(person1.name);
console.log(person1.age);

//constractor function
function Person(){
    this.name="jhon";
    this.age=12;
    this.birthday="2011-10-09";
}
let person = new Person();
console.log(person.age);
console.log(person.name);
console.log(person.birthday);


function Person2(name, age, salary){
    this.name = name,
    this.age = age,
    this.salary = salary
}
let persons = new Person2("Alex", 34, 12909);
let persons2 = new Person2("Belay" , 45, 2342);
console.log(persons.name);
console.log(persons2.name);

console.log("--------------------------------------------------")
//Distructure object
let options = {
    title : "Menu",
    width : 100,
    height: 200,
};
// let title = options.title;
// let width = options.width;
// let height = options.height;

//using distructoring object
let {title,width,height}=options;
console.log(title);
console.log(width);
console.log(height);

//if you want to change the title name
let {title:t, width:w, height:h} = options;
console.log(t);
console.log(w);
console.log(h);

//wrap destructuring expression in parentheses
let title1, width1, height1;
({title1, width1, height1} = {title:"menu", width:200, height1:100});
console.log(title);

//default value and paramenter
let 