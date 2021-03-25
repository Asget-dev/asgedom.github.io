const myString = {
  string: "Programming with Treehouse is fun!",
  countWords: function () {
    //adding to array
    let wordArray = this.string.split(" ");
    return wordArray.length;
    // for (let i = 0; i < x.length; i++) {
    //   count += x[i];
    // }
 
  },
};
//calling method
console.log(myString["countWords"]());

//output the array
console.log(myString.string.split(" "));
//count the length for array
let countWord = myString.countWords();
console.log(countWord);

//count the caractors
myString.characters = myString.string.length;
console.log(myString.characters);
