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

const obj2 = {
};

nameString(obj2);
// module.exports = {nameString};



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

function nameString(obj) {
let x =[];
  for (let key in obj) {
    x.unshift(key);
  }x.sort();
  let y =(x.join("."));
  return y;
}

const obj = {
    a:5,
    z:6,
    m:8,
  };
nameString(obj);

