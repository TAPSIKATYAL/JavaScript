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
// The rest operator is used to collect mutiple elements/ properties into single array or object.