"use strict";
exports.maxOfThree = maxOfThree;
exports.multiply = multiply;
exports.sum = sum;
exports.findLongestWord = findLongestWord;
exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2> num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
    // let max = 0;
    // let number = [];
    // number.push(num1);
    // number.push(num2);
    // number.push(num3);
    // for(let i=0; i<number.length;i++){
    //     if(number[i] < max){
    //         number[i] = max;
    //     }
    // }return max;
}
console.log(maxOfThree(-1,-2,-3));

function sum(num){
    let sum = 0;
    for(let i=0; i<num.length;i++){
        sum += num[i];
    }
    return sum;

}
function multiply(num){
    let multiply = 1;
    for(let i=0; i<num.length;i++){
        multiply *= num[i];
    }
    return multiply;

}
let input = [1,2,3,4];
console.log(sum(input));
console.log(multiply(input));


function findLongestWord(text){  
 let longestWord = ""; 
 let word;
   for(let i=0; i<text.length; i++){    
      if(text[i].length > longestWord){
          longestWord = text[i].length;
          word = text[i];
      }
   }return word;
}
console.log(findLongestWord(["this", "is", "a", "test", "longest"]));

function reverseArray(arr){
    let copy = [];
    let reverse = [];
    for(let i=0;i<arr.length;i++){
        copy.push(arr[i]);
    }
    console.log(copy);
    for(let j=copy.length-1; j>=0; j--){
        reverse.push(copy[j]);
    }
    return reverse;
    //console.log(reverse);
}
function reverseArrayInPlace(arr){
    let reverse = [];
    for(let num of arr){
        reverse
        .push(reverseArray(num));
    }
    return reverse;
    //console.log(reverse);
}
// let test = ["A", "B", "C"];
// let test2 = ["A", "B", "C", "D"]
// let test3 = [1, 2, 3, 4, 5];
// console.log(reverseArray(test));
// console.log(reverseArray(test2));
// console.log(reverseArray(test3));
// console.log(reverseArrayInPlace(test));
// console.log(reverseArrayInPlace(test2));
// console.log(reverseArrayInPlace(test3));