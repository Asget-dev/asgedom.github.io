/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
  let count = 0;
  for (let pro in this) {
    count++;
  }

  let countTwo = 0;
  for (let key in this) {
    if (key.length < 3) {
      countTwo++;
    }
  }
  let countThree = 0;
  for (let key in this) {
    if (typeof this[key] === "object") {
      countThree++;
    }
  }

  return { numProperties: count, cntShortName: countTwo, cntReference: countThree };
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
  this.name = name;
  this.country = country;
  this.grades = grades;
  // computeGrade;

  this.computeGrade = function (grades) {
    let sum = 0;
    let result;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    result = sum / this.grades.length;
    return result;
  };
}
let person = new Person("bob", "usa", computeGrade());
