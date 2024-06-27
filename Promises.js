// const url = "https://dummyjson.com/todos?limit=10&skip=8";


// const promise = fetch(url);
// console.log(promise);


// const promises = navigator.getBattery();
// console.log("Promise2=> "+ promises);

const cart = ["shoes","skirt","pants"];

const promise = createOrder(cart);  // create order is API which sends us an Promise object. We need to make it return Promise.
console.log(promise);
promise.
then(function(orderId){
    console.log(orderId);
    return orderId;
}).then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(err => console.log(err))
.then(function(){
    console.log("No matter what happens this will be called");
})

function createOrder(cart){

    const pr = new Promise((resolve,reject) =>{

        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        setTimeout(function(){
        resolve(orderId);
        },5000);
    })
    return pr;
}

function validateCart(cart){
return true;
}

function proceedToPayment(orderId){
return new Promise(function(resolve,reject){

    resolve("Payment is Successful");
})

}