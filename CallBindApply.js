let name = {
    firstname: "Tapsi", 
    lastname: "Katyal",
}
let printFullName = function(hometown,state){// every function in js  has access to this keyword. Here this keyword is point to name object.
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}
printFullName.call(name, "Pune", "Maharashtra");
let name2 = {
    firstname: "Virat",
    lastname: "Kohli",
}

// function borrowing - using call method
// we can borrow function from other objects and use it with data of some other objects

//first parameter is always a reference to where our this needs to be pointed.
// after you can give n no. of arguments
printFullName.call(name2, "London", "UK"); // pass individual arguements

//call and apply method is only difference is the way how we pass arguements
// In apply method we pass arguements is Array List
printFullName.apply(name2, ["London", "UK"]); // second arguements as a Array List

//bind method - same as call method
// just bind and keep the copy of method and use it later
let printMyName = printFullName.bind(name2, "London", "UK");
console.log(printMyName);
printMyName();