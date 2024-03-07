const users = [
  { firstName: "Rohan", lastName: "saini", age: "75" },
  { firstName: "Tripta", lastName: "Jindal", age: "25" },
  { firstName: "Urvashi", lastName: "Singla", age: "26" },
  { firstName: "Rohit", lastName: "Gupta", age: "34" },
];

//list of Full Names
//["Rohan saini", "donald trump"]
const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);
// How many people with age
//acc {26: 2, 75: 1, 50: 1}
const output2 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output2);
//First Name of all the people whose age is <30
//Chaining Method
const ageIslessthan30 = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(ageIslessthan30);
const ageIslessthan30ByFilter = users.reduce(function(acc, curr) {
if(curr.age < 30){
    acc.push(curr.firstName);
}
return acc;
},[]);
console.log(ageIslessthan30ByFilter);
