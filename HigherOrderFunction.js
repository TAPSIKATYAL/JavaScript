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