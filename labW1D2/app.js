/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function nameString(obj) {
    if (obj === null) {
        return "null argument";
    }
    if (obj === undefined || obj === null) {
        return "no object passed";
    } 
    else{
    let x = [];
    for (let key in obj) {
      x.unshift(key);
    }
    x.sort();
    let y = x.join(".");
    if(y.length===0){
        return "object has no properties";
    }
    return y;
  }
  
}

// function nameString(obj){
//   if ({}) {
//     return "object has no properties";
//   }

//   if (key === undefined) {
//     return "No object passed";
//   } else if (obj === null) {
//     return "null argument";
//   } else {
//     for (let key in obj) {
//       str.push(key);
//     }
//     if (str.length == 0) {
//       return "object has no properties";
//     } else {
//       str.sort();
//       return str.join(".");
//     }
//   }
//}
// See tests.js for behavior
// function nameString(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// const obj = {
//     name: "a",
// };
// console.log(nameString(obj));
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

// function nameString(obj) {
// let x =[];
//   for (let key in obj) {
//     x.unshift(key);
//   }x.sort();
//   let y =(x.join("."));
//   return y;
// }

// const obj = {
//     a:5,
//     z:6,
//     m:8,
//   };
// nameString(obj);
