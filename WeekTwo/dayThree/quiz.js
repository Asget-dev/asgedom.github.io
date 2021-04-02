// function pow(x, n) {

//     if (n == 1) {
 
//          return x;
 
//        } else {
 
//             return x * pow(x, n - 1);
 
//      }
 
//  }
 
//  console.log( pow(2, 0) );


 function factorial (n){
    if(n===0){
        return 1;
    }else{
        return n * factorialRec(n-1);
    }
}
console.log(factorial (5));