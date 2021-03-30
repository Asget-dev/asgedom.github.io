// const names = ["J","a","d"];
// for(let i of names){
//     console.log(i);
// }

// for(let i of names){
//     if(i==="J"){
//         console.log(i)
//     }
// }


// const firstNames = ["Alex","Belay","Samri","Bety"];
// let [first,,,third,fourth] = firstNames;

// console.log(first,fourth);


// const[first,,thred]=["foo","bar","baz"];
// console.log(first);
// console.log(thred);

// let user = {};
// [user.name, user.surname] = "John smith".split(" ");
// console.log(user);


//...rest
//value of array of remaining element

const firstNames = ["Alex","Belay","Samri","Bety"];

//let [first, second, third, fourth] = firstNames;
//other way
let [first,...rest] = firstNames;
console.log(rest);

//we can access rest too
let [x,y,z] = rest;
console.log(x);
//console.log(first);

console.log(rest.length);



//DEFAULT VALUE
let [name="Alem", age=44,sex="F"] = ["Julius"];
console.log(name);
console.log(age);

const team = ["Bob","Fred","Jim"];
const [bob, ,jim] = team;
console.log("expect" ,bob);
console.log("expect",jim);