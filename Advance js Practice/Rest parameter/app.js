// Rest parameter


//  rest operator three dot se banta hai ye aese km krta hai jo object ki property rehjatin hain unhe lane main 
// help krta hai

let obj={
    name:"Ayan",
    father_name:"Naeem",
    education:"Undergraduate",
    Salary:1200000
}

let{name,father_name ,...hello}=obj

console.log(hello);
console.log(father_name);


// hum three dot laga kr kuch bhi name desakte hai to ye bachi huwi values and prperty le ayega