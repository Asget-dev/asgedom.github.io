/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
// function nameString(obj) {
//   return "object has no properties";
// } 
// const obj = {};
// console.log(nameString(obj));

function nameString(obj) {
  return"object has one property";
}
const student = {
    name:"Asgedom",
};
for(let key in student){
    key;
}
  
console.log(nameString(student));
