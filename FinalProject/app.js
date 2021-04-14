

class User {
	constructor(name, author, year) {
	  this.name = name;
	  this.author = author;
	  this.year = year;
	}

	login(user,pass){
		if(user == "manager" && pass == "123"){
			console.log("login success---")
		}else{
			console.log("login failed")
		}
	}
	logout(){
		console.log("logout")
	}
  }


  

let bill = document.getElementById("inputOne").value;
let tip  = document.getElementById("inoutTwo").value;
const asgedom = new User("book one", "John Doe", "2013");

//   abera.login(bill,tip);
asgedom.login(bill,tip);
// console.log(message);
  document.getElementById("output").innerHTML = message;



//   let display=document.getElementById("output").innerHTML;
//   let color=display.fontcolor("green");
//   document.getElementById("output").innerHTML = color ;


   document.getElementById("calculate").onclick = asgedom.login(bill,tip);
    
    