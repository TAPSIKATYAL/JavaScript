//What is spread operator
// The spread operator is used to spread all the elements of an array or properties of an object into another array/object

const fruits = ['apple','mango','papaya'];

const morefruits = [...fruits,'kiwi','litchi'];

console.log(morefruits);

const person = {
name: 'sneha',
age: 19
}

const job = {
    job: 'teacher'
}

const personWithJob = {...person,...job};
console.log(personWithJob);
//what is the rest operator
// The rest operator is used to collect mutiple elements/ properties into single array or object. It is(...) used in function parameters to accept indefinite number of arguments


function sum(...numbers){
return numbers.reduce((total,num)=> total+num,0);
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6));

//Used in object restructing as well
//You can use the rest operator to collect remaining properties of an object when destructuring.
const person1 = {name:'sneha', age:'23', job:'Hr', salary:'35999'};

const {name,age, ...rest} = person1;
console.log(name);
console.log(age);
console.log(rest);

