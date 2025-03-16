// destructuring ekk method hai jisse se hum obj ki properties or array ki valuess ko simple
// variable main tor sakte hain aur use kahin bhi access krsakte hain 


// object main values ka name same hona zaroori hai
let obj={
    name:"Ayan",
    father_name:"Naeem",
    education:"Undergraduate",
    Salary:1200000
}

let{name,father_name,education:studenteducation}=obj

console.log(name);
console.log(father_name);
console.log(studenteducation);


// arr main variable ka name kuch bhi lesakte hain 
var arr=[1,2,3,4,5,6,7,8,9,10]

let[one,two,three]=arr

console.log(one);
console.log(two);
console.log(three);



