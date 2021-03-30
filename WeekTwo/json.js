"use strice";
// const student = {
//     name: 'alem',
//     age: 23,
//     isActive: true,
// }

// console.log(student.name);

// const studentToString = JSON.stringify(student);
// console.log(studentToString);
// console.log(typeof studentToString);

// const stringToObject = JSON.parse(studentToString);
// console.log(stringToObject);

//JSON
// is data only
//some object properties are skipped
//-Function property
//-properties that store undefined
//eg- age:undefined
let jsonString = {
  "window": {
    "title": "Sample Widget",
    "width": 500,
    "height": 500,
  },
  "image": {
    "src": "images/logo.png",
    "coords": [250, 150, 350, 400],
    "alignment": "center",
  },
  "messages": [
    { "text": "Save", "offset": [10, 30] },
    { "text": "Help", "offset": [0, 50] },
    { "text": "Quit", "offset": [30, 10] },
  ],
  "de bug": "true",
};

jsonString = JSON.stringify(jsonString);
const data = JSON.parse(jsonString);


console.log(data.window.title)

console.log(data.image.coords);
console.log(data.image.coords[2]);
console.log(data.messages.length);
console.log(data.messages[2].offset[1]);

//to access last index 
let lastIndex = data.messages.length - 1;
console.log(data.messages[lastIndex].offset[1]);

//to access space property value
console.log(data["de bug"]);