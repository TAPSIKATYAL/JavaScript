// const arr = [1,2,3,4,5,6];

// // const FilteredCurryFunction = (num) => arr.filter((item) => item > num);

//  const FilteredNumber = (num) => { 

//  //const filteredArray = FilteredCurryFunction(num)
//  const filteredArray = arr.filter((item) => item > num);
//  return filteredArray;
// }

//  //console.log(FilteredNumber(4));

//  const FilteredFunctiongreaterthanFive = FilteredNumber(5);
//  //console.log(FilteredFunctiongreaterthanFive)


 function add (x){
    return function(y){
        return function(z){
            return x+y+z;
        }
    
    }
 }

 const addFive = add(3)(2);
 console.log(add(3)(2));
 console.log(addFive(5))
 const addTen = add(3);
 console.log(addTen(10)(4));