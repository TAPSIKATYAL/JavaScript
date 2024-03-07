// Question 1 => sum of all Natural Number

// sum of 1 to 5 : 15


function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i = 0 ; i<=num;i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5))
console.log(sumOfNaturalNumber(10)) 

//Question 2 => sum of digits of number
//1287 => 1 + 2 + 8 + 7 = 18


function sumOfAllDigits(num){
    let sum = 0 ;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

console.log(sumOfAllDigits(1287))

//Question 3 => Count the number of digits
// 34252 => 5
// -121 => 3

function countNumberOfDigits(num){
    num = Math.abs(num);
    let count = 0;
    do{
        count++;
        num = Math.floor(num/10);
    }while(num > 0)

    return count;
}

console.log(countNumberOfDigits(34252));
console.log(countNumberOfDigits(-121))
console.log(countNumberOfDigits(2))
             

//Question 4 To check Pallindrome

//1234 == 4321
// 121 == 121
function checkPallindrome(num){
    let copyNum = num, reverseNum = 0;
    while(copyNum > 0 ){
        let lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum/10);
    }
    return num === reverseNum;
}

console.log(checkPallindrome(1234))
console.log(checkPallindrome(121))