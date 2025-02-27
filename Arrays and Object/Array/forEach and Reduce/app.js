//  it doesn't give a new array
// it doesnot modify the original array

// 88888888888888888888888888888 REDUCE 8888888888888888888888888888888888//

// reduce hamen tamam value pr kuch kam krke hamen ek value deta hai

var arr=[1,2,3,4,5,6,7,8,9,10]

var sum=arr.reduce((a,b)=>{
    return a+b
})

console.log(sum);


// 88888888888888888888888888 FOR EACH 888888888888888888888//

// 1. for each sbse zyada istemal hota hai ye kuch return nhi krta apko direct ise use krna hota hai
// 2. ye teen parameter leta hai 

// * number 1*
// value of array

// * number 2*
// index of array 

// * number 3*
// array itself



var number=arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
    
})

console.log(number);
