const arr = [5, 1, 3, 2, 6];

//Map function = transform an array ( means transform each and every values of array)
//double the values
//triple the values
function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}

function binary(x){
    return x.toString(2);
}
const mapFunction = arr.map(double);
const mapFunction2 = arr.map(triple);

const mapFunction3 = arr.map(binary);
console.log(mapFunction);
console.log(mapFunction2);
console.log(mapFunction3);

//Another way to write Map function

const reduceEachValueBy1 = arr.map(function(x){
    return x-1;
});
console.log(reduceEachValueBy1);

// or you can write in Anonymous Function

const addEachValueBy2 = arr.map((x) => x+2);
console.log(addEachValueBy2);

// *******************************  Filter Function  ************************************************
// Used to filter Values from array

const greaterthan4 = arr.filter((x) => x>4 );
console.log(greaterthan4);

// *******************************  Reduce Function  ************************************************

//Find Sum
//Non Functional Programming 

function findSum(arr){
    let sum = 0 ;
    for(let i = 0; i<arr.length; i++ ){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//Functional Programming Way

const findSumByFP = arr.reduce(function(acc, curr) 
{
    acc =  acc + curr
    return acc;

},0); 
// 0 is default value of acc similar to sum = 0
console.log(findSumByFP);


//Find Max element in array

function findMax (arr){
    let max = 0 ;
    for(let i = 0; i<arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const findMaxByFilter = arr.reduce(function(acc,curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
},0);

console.log(findMaxByFilter);