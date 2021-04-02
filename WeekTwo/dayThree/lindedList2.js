// let person = {
//     firstName: "John"
// };

// person.phoneNumber = {
//     area: 641,
//     number: 888-888-888,
// }

// console.log(person);

let linkedList = { value: 1};
linkedList.next = {value: 2};
console.log(linkedList);


let addbeginning = {value:5};
addbeginning.next = linkedList;
console.log(addbeginning);

linkedList.next.next = {value: 4};
console.log(linkedList);

linkedList.next.next.next = {value:5};
console.log(linkedList);