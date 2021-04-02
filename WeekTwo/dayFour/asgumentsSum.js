function findSum(){
    let sum = 0;
    for(let i=0; i<arguments.length;i++){
        sum= sum+arguments[i];
    }
    return sum;
}

console.log(findSum(1,2,3,4));