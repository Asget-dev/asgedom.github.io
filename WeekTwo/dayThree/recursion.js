// function pow(num1, num2){
//     if(num2==1){
//         return num1;
//     }else{
//         return num1 * pow(num1, num2-1);
//     }
// }
// console.log(pow(2,2));

// // console.log(Math.pow(2,0));//1

// function printChrRevers(str){
//     if(str.length === 0){
//         return 
//         ;
//     }else{
//         printChrRevers(str.substring(1));
//     console.log(str.charAt(0));

//     }
// }
// console.log(printChrRevers("abc"))

function factorialRec(n){
    if(n===0){
        return 1;
    }else{
        return n * factorialRec(n-1);
    }
}
console.log(factorialRec(5));

// function fibonachi(n){
//     if(n == 0 || n==1){
//         return 1;
//     }else{
//         return fibonachi(n - 1) + fibonachi(n -2);
//     }
// }