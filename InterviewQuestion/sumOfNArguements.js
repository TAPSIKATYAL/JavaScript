function sum(x){
    var currentSum = x;
    return function innerSum(y){
        if(y === undefined){
            return currentSum;
        }
        currentSum +=y;
        return innerSum;
    }
}
console.log(sum(2));

console.log(sum(2)(3)(4)(7)());

//sum(2) currentSum = 2 and return innerSum;
//innerSum(3)  y=3 update currentSum = 5 return innerSum; // here sum will make a closure with innerSum
//innerSum(4) y = 4 update currentSum = 9 return innerSum;
//innerSum(7) y = 7 update currentSum = 9 return innerSum;
//innerSum() y= undefined go to if condition and return currentSum;