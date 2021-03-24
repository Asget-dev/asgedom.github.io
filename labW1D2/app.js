/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

function nameString(obj) {
    if (obj === null) {
        return "null argument";
    }
    if (obj === undefined) {
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

