
// // let and const are block scoped

// {let x = 10; // This will be in Script block in block scope
// console.log(x);}
// {
//     let y = 2;
//     y =3; // you can reassign value
//     console.log(y); // This will be in Block Scope in Call stack
//     // let y = "tapsi";Can't re declare block scope variable y
// }
// let x = 10;
// console.log(x); // This value coming from script block from above decalaration because outside of block is kept in script

// // z= 10; //Can't access z before initialization Refernce Error
// // let z; The variable is in a "temporal dead zone" from the start of the block until it is declared:
// // console.log(z)

async function withAsyncAwait() {

    console.log('Start')
    setTimeout(() => {
        console.log("Hello, after 10 seconds");
      }, 10000);
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello World, after 5 seconds");
      }, 5000);
    });
  
    const data = await promise;
    console.log(data)
  
  
    console.log("Some Synchrnous Code, also after 10 seconds");
  }
  
  withAsyncAwait();