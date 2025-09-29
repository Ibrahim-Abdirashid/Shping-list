// how to know your value data type
// let myName = 'sara'
// console.log(typeof myName);
//....................................

//2: how to convert string to a number 
// let myNumber = '20';
// // myNumber = parseInt(myNumber)
// // myNumber = + myNumber
// // myNumber = Number(myNumber)

// console.log(myNumber  ,typeof myNumber);

//.................................................
//3: Capitalize challenge 
// let myString = 'developer';
// let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1,9);

// console.log(myNewString);

//.................................................................................
//todo: working with Numbers
let number = 5
number  = new Number(5); // lanbar baan data type-kisa u baddalay object
console.log(typeof number);






//4.1: Number Challenge
//4.1.1 adding (substracting iyo division iyo multipy: sidaas oo kale waad u sameyn kartaa)
let x = Math.floor(Math.random() *100 +1);
let y = Math.floor(Math.random() *100 + 1);
let sum = x + y

const sumOutPut = `${x} + ${y} = ${sum}`
console.log(sumOutPut);


