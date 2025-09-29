

//challenge 1: function

// const calculate = (num1 , num2 , operator)=>{
// let result;
// switch (operator) {
//     case "+":
//         result = num1 + num2
//         break;
//     case "-":
//         result = num1 -num2
//         break;
//     case "*":
//         result = num1 * num2
//         break;
//     case "/":
//         result = num1 / num2
//         break;

//     default:
//         result= "invalid";
// }

//     console.log(result);
//     return result
    
// }

// (calculate(2 , 3, "*" ));


//challange fizzbizz

// for(let i = 1; i <=100 ; i++){
//     // console.log(i);
//  if (i % 3 ===0 && i %5===0){
//     console.log("fizzBizz " + i);
    
// }else  if(i %3===0){
//         console.log("fizz " + i);
        
// }else if(i % 5 ===0){
//         console.log("bizz " + i);
        
//     }else{
//         console.log(i);
        
//     }
// }

//for of loop

const items = ["book", "table", "chairs", "shoes"]

for(const item of items){
    console.log(item);
    
}

// for in loop: waa like for of loop

const colors = {
    color1 : "red",
    color2 : "blue",
    color3 : "green",
    color4 : "yellow",
}

for(const color in colors){
    console.log(color, colors[color]);
    
}

// for in loop array

const fruits = ["banana", "mango", "strawberry", "bubi"]

for(const fruit in fruits){
    console.log(fruits[fruit]);
    
}