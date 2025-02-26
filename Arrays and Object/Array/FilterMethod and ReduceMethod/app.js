var arr=[1,2,3,4,5,6,7,8,9,10]

var evennumber=arr.filter((num)=>{
    return num%2==0
})

console.log(evennumber);

var sumofnum=arr.reduce((prev,curr)=>{
     return prev+curr
})

console.log(sumofnum);
