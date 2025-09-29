// function paramatar u qaadanaya object

// function loggedUser(user){

//     return `the ${user.name} with have this id ${user.id} and location is ${user.location} logged`
// }

// console.log(loggedUser({
//     id: 1,
//     name: 'yusuf',
//     location : 'hargaisa'
// }))

// challenge function;
// chalenge; 1
const getCelcius = f=> (f -32) * 5 /9
console.log(getCelcius(32));

//challenge 2:
const minMax = (arr) =>{
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return {
        max,
        min,
    }
}
console.log(minMax([1,2,3,4,5, 100]));
