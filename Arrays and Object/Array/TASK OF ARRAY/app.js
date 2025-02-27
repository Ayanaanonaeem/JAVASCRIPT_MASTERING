// 1.Create a new array that contains only the even numbers from the original array.

var arr=[1,2,3,4,5,6,7,8,9]

var evenNumber=arr.filter((num)=>{

    return num%2==0
})

console.log(evenNumber);


// 2.Sort the array in descending order.

let descendingorder=arr.sort((a,b)=>{
    
    
   b-a
    
})

console.log(descendingorder);

// 3. Sum all the number 

var sumarr=arr.reduce((curr,prev)=>{
    return curr+prev
})

console.log(sumarr);

// 4.Multiply each element by 3 

var multiplyarr = arr.map((val)=>{
    
    return val*3
    
    
})

console.log(multiplyarr);


