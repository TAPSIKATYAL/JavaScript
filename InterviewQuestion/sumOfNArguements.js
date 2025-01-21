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