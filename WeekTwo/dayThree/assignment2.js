// ØQuestion 1: Sum all numbers till the given one
// Ø
// ØQuestion 2: - use recursion to implement print() method
// ØUse Object literal to create an object named linkedlist which has the following methods:
// Ølinkedlist.add(1)
// Ølinkedlist.remove(2) – remove the first one
// Ølinkedlist.print() – format: LinkedList{ 1, 2, 5, 7 }

// function sum(num) {
//   if (num === 0) {
//     return 0;
//   }else{
//       return n + sum(num - 1);
//   }
// }
// console.log(sum(100));
node1 = {value :50, next: null};
let head = {value: 10, next: node1};

let addbeginning = {value:5};
addbeginning.next = head;
console.log(head);




let linkedlink = {value:1};
linkedlink.next = {value: 2};
linkedlink.next.next = {value:3};
linkedlink.next.next.next = {valude:4};
linkedlink.next.next.next.next = null;
console.log(linkedlink);

// add in the begging and join the linkedlink
let addbegging = {value:"beggning"};
addbegging.next = linkedlink;
//same as the above
// let addbegging = {value:"beggning",next: linkedlink};
linkedlink = addbegging;
console.log(linkedlink);

//remove from the middle and join linkedlink
linkedlink.next = linkedlink.next.next;
//same us
let node1 = linkedlink.next.next;
linkedlink.next = node1;
console.log(linkedlink);
node1 = null;
console.log(linkedlink);

