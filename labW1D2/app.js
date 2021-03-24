/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";






// See tests.js for behavior
function nameString(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const obj = {
    name: "a",
};
console.log(nameString(obj));









// function nameString(obj) {

//   for (let key in obj) {
//     key;
//     return "object has one property";
//   }

// }

// const obj = {
//     a: 5,
//   };
// console.log(nameString(obj));

// function nameString(obj) {
// let x =[];
//   for (let key in obj) {
//     x.unshift(key);
//   }x.sort();
//   console.log(x.join("."));
// }

// const obj = {
//     a:5,
//     z:6,
//     m:8,
//   };
// nameString(obj);
