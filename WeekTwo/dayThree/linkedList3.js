let linkedList = {value: 1};
linkedList.next = {value: 2};
linkedList.next.next = {value:4}
linkedList.next.next.next = {value:5};
console.log(linkedList);

let secondList = linkedList.next.next;
linkedList.next.next = null;
console.log(secondList);
console.log(linkedList);

//to join to linkedlist
linkedList.next.next = secondList;
console.log(linkedList);


