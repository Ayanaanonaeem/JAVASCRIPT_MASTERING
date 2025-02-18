// CALCULATOR  //


var firstNum = document.getElementById("firstname")
var secondNum = document.getElementById("secondname")
var result=document.getElementById("result")

function calculate(sign) {
   
    if (sign=='+') result.innerText =Number(firstNum.value)+Number(secondNum.value)
    if (sign=='-') result.innerText =Number(firstNum.value)-Number(secondNum.value)
    if (sign=='/') result.innerText =Number(firstNum.value)/Number(secondNum.value)
    if (sign=='*') result.innerText =Number(firstNum.value)*Number(secondNum.value)
    
}


// TABLE OF NUMBER  USING FORLOOP//
 
/*var usernumber=+prompt("enter a number")

for(var i=0; i<=10; i++){
    document.write(`<br>${usernumber} x ${i} = ${usernumber*i}`+"<br>")
}
*/


// WORKING WITH ARRAY //

let array=["ayan","taha","umer","izhan","moiz"]
let dala="qwewewewewewwweewewew"

// array.forEach((val)=>{
//   console.log(val);
  
// })

for (const value of dala) {
    console.log(value);
    
}

