"use strict";
// object that can be used in for..of are called iterabe
// Array, String are some built-in types

let arr = [1, 2, 3, 4];
for (let i of arr) {
  console.log(i);
}

let name = "John Smith";
for (let i of name){
    console.log(i);
}


//Object
let person = {
    name: "Jhon",
    age: 20
}
for(let i in person){
    console.log(i);
}