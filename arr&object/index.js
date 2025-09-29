//1: challenge one; inaad elemnts-ka dib ka keentaa la rabaa
// const arr = [1 ,2 ,3 ,4 ,5];
// const x = arr.reverse()
// console.log(x);

// //2: challenge: 2: combine arr1 and arr2 into a new  called arr3 with the following elements
// const arr1 = [1 ,2 ,3 ,4 ,5];
// const arr2 = [5,6 , 7 , 8 ,9 ,10]

// arr2.shift()
// const arr3 = [...arr1 , ... arr2];
// console.log(arr3);


//.....................................................................
//1: challenge object:

const library = [
    {
        title: "hema bookl",
        author : 'ahmed',
        status :{
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "hema book2",
        author : 'cuute',
        status :{
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "hema book3",
        author : 'carab',
        status :{
            own: true,
            reading: false,
            read: false,
        }
    }
]

library[0].status.read= true
library[1].status.read= true
library[2].status.read= true


const {title : firstBook }= library[0]


const newJson = JSON.stringify(library)

 console.log(newJson);
 