/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	let result = "";
	 if(string === undefined){
		 return "missing argument";
	 }else if(typeof string !== "string"){
		 return "argument not string";
	 }
	 for(let i=1; i<string.length;i++){
		 if(i%2 !== 0){
			 result += string[i];
		 }
	 }return result
}
// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let biggert = array.reduce((acc, array)=>{
		if(array > 0){
		acc += array;
		}return acc;
	},0);
	return biggert;
}


// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	function positiveNumber (number){
		if(typeof number ==="number"){
			if(number < 0){
				number = -number;
			}
		}
		return number;
}
return array.map(positiveNumber);
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];

function removeZeros(array) {

}


