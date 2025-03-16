// default parameter

// function sum(a, b) {
//     return a+b
// }

// var sum_number=sum(2,3)

// console.log(sum_number);

// default parameter is liye use hota hai agr hum function call krte huwe parameter main koi number nhi dalte to 
// ye automatically woh number leta hai jo hum ne default value de hoti hai


function sum(a,b, c=4) {
    return a+b+c
}

var sum_number=sum(2,3)

console.log(sum_number);


// aur agr hum c ki koi value nhi dete donon jgh  to ye nan dedeta hamen 


function valsum(a,b, c) {
    return a+b+c
}

var sum_number=valsum(2,3)

console.log(sum_number);