const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1,2,3], 4];
// const arr2 = new Array();
console.log(arr);

//Question 1: How do you check if an element exists in an array?

const findElement= (arr, target)=> {
    for(let x of arr){
        if(x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr,"Hello"));
console.log(findElement(arr,"H"))
console.log(arr.includes("Hello"))

//Question 2: How do you find the index of an element in an array?

//forEach doesn't give early return So index should be stored in variable
const findIndex=(arr,target)=>{
    let foundIndex = -1;
    arr.forEach((element,index) => {
        if(element == target){
            foundIndex = index;
        }
    });
    return foundIndex;
}

console.log(findIndex(arr,"Hello"))
console.log(findIndex(arr,4))

console.log(arr.indexOf("Hello"));

//How to delete, add & update elements from a specific index?
//Splice Method 

console.log(arr);
arr.splice(1,3); //Deleting from Array
console.log(arr);
//Adding in Array
//Starting from index 1 , deleting 0 element, adding the whatever(object,arrays,numbers) you want
arr.splice(1,0,2,3,4,5,6);
console.log(arr)
//Deleting and Adding both
arr.splice(1,3,6,7,8);
console.log(arr);

//splice() vs slice()

const subArr = arr.slice(1, 4); // [start, end) it exclude the end index. And it doesn't effects the original Array which arr here
console.log(subArr);//it returns value which is given in function
console.log(arr);


//How to copy Array in JavaScript

// Shallow Copy // It changes the original Array also when simply put one array variable to another
const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr)


//Deep Copy
//Using Spread Operator

const arrC = [...arr];
console.log(arr)
const arrtemp = arrC.slice(1,2)
console.log(arrtemp)
console.log(arrC);
console.log(arr);

// Using Array.from()
const arrD = Array.from(arr);
console.log(arrD);

//using concat Method

const arrE = arr.concat();
console.log(arrE);


//Combining Two Array

const newArr = [...arr,...arrE];
console.log(newArr);

//Check if two Arrays are equal or not

const isArrayEqual = (arr1,arr2) =>{
    // if(arr1.length !== arr2.length){
    //     return false;
    // }

    // for(let i=0; i<arr1.length;i++){
    //     if(arr1[i] !== arr2[i]){
    //         return false;
    //     }
    // }
    
    //one Line solution with every method
    return arr1.length === arr2.length && arr1.every((element,i)=> arr1[i]=== arr2[i]);
    //One More Method that is some if anything is true then it will return true
    // return true;
}

console.log(isArrayEqual([1,2,3],[1,2]))
console.log(isArrayEqual([1,2,3],[1,2,3]))

//How to sort an array in ascending and descending form?

const x = [1, 4, 6, 0, -9, -5];

x.sort();
console.log(x);

//1,4 4-1 =3
x.sort((a,b)=> b-a);
console.log(x);

//How to reverse an Array?
x.reverse();
console.log(x)

//Map, filter, reduce

console.log(x.map(i => i*i));

const newFilterArray = x.filter((ele,i)=> ele > 0);
console.log(newFilterArray)

const sumofArr = newFilterArray.reduce((acc,ele) => acc + ele);
console.log(sumofArr);

//Flat of Array

const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattenedArray = y.flat(1);
console.log(flattenedArray)

//Find in Array

//It returns the single value which gets true

const positiveNumber = x.find((ele,i)=> ele>0);
console.log(positiveNumber)

var nums = [2,7,11,15], target = 9

console.log(twoSum);
