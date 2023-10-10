const radius = [3,2,1,4];

const area = function(temp){
   return (Math.PI * temp* temp);
}
const diameter = function(temp){
    return (temp * temp);
}
const calculateDiameter = function (radius){
    let output = [];
    for(let i=0;i<radius.length;i++){
        output[i] = radius[i] * radius[i];
    }
    return output;
}
const calculateArea= function (radius){
    let output = [];
    for(let i=0;i<radius.length;i++){
        output[i] = Math.PI * radius[i] * radius[i];
    }
    return output;
}
const calculateCircumference= function (radius){
    let output = [];
    for(let i=0;i<radius.length;i++){
        output[i] = 2 * Math.PI * radius[i];
    }
    return output;
}

const calculateCircle = function(radius, logic){
    let output = [];
    for(let i=0;i<radius.length;i++){
        output[i] = logic(radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius));
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateCircle(radius,area));
console.log(calculateCircle(radius,diameter));


// calculate Circle is Higher Order function and area, diamete is callback function

//What is Higher Order Function
// A function that takes another function as an arguement or return a function from it.