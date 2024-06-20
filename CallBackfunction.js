// Callback function in javascript is a function you pass into another function to be called when when the first function has completed it's task. It's a way to make sure to run your code in correct order, espscially when other tasks take some time, like reading file, fetching data from internet, or waiting for user input


function doSomething(callback){
    console.log("Doing something...");

    setTimeout(function(){
        console.log("Something is done");
        callback();
    },2000)//2 second delay
}

function whenDone(){
    console.log("First Function completed. Task is completed");
}

doSomething(whenDone)


// xyz is callback function here
document.getElementById("clickme").addEventListener("click",function xyz(){
    console.log("Button Clicked");
});