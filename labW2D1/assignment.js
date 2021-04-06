/*eslint-disable*/
const prompt = require("prompt-sync")();
// var prompt = require('prompt');

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(()=>user.loginOk(true),()=>user.loginFail(false));
askPassword(()=>user.loginOk.call(user),()=>user.loginFail.call(user));


/*Question Two */
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: "John",
  login(result) {
    console.log(this.name + (result ? `loggid in `:`failed to log in`));
  }
};

askPassword(user.login.bind(user), user.login.bind(user));
askPassword(()=>user.login(true),()=>user.login(false));
askPassword(()=>user.login.call(user),()=>user.login.call(user));


/**Question three */
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();
