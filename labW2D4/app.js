// let animal = {
// 	eats:true
// };
// function Dog(name){
// 	this.name = name;
// }
// Dog.prototype = animal;
// let snoopy = new Dog("Snoopy");
// console.log(snoopy.eats);

// /**other form */
// let animal = {
// 	eats:true
// };
// let dog = Object.create(animal);
// snoopy.name="Snoopy";
// console.log(snoopy.eats);
// /**other form */



// let snoopy = {
// 	name:"Snoopy"
// };
// snoopy.__proto__=animal;
// console.log()

//snoopy parent is dog dog animal is animal


//conver in to class
// function User(name){
// 	this.name = name;
// }
// User.prototype.sayHi = function(){
// 	console.log(this.name);
// }
// let user = new User("John");
// user.sayHi();

// class User{
// 	constractor(name){
// 		this.name = name;
// 	}
// 	sayHi(){
// 		console.log(this.name);
// 	};
// }
// let user = new User("jhon");
// user.sayHi();
