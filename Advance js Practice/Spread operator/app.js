// Spread Operator

// spread operator hamare pass copy krne ka kam krta hai ye use hota hai array aur obj donon ke liye 
// ye bhi three dot laga kr use hota hai


let obj={
    name:"Ayan",
    father_name:"Naeem",
    education:"Undergraduate",
    Salary:1200000
}

let obj2={
    ...obj

}

let obj3=obj2
obj3.Salary=1300000

console.log(obj2);
console.log(obj);
console.log(obj3);

var arr=[1,2,3,4,5,6,7,8,9,10]

var newarr=[...arr]

console.log(newarr);

array.forEach(element => {
    
});




