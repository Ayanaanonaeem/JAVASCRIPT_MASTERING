var a=4;
var b=4;
var result;


//88888888888888888888888 FUNCTION WITH FUNCTION NAME 8888888888888888888888888888//
function sum() {
    result=a+b
    return result
}

console.log(sum());


//88888888888888888888888888  ARROW FUNCTION 88888888888888888888888888888888888888888//

var subraction=()=>{
   result=a-b
   return result
}

console.log(subraction());


//888888888888888888888888  ANONYMOUS FUNCTION 888888888888888888888888888//

var multiplication=function(){
    result=a*b
    return result
}

console.log(multiplication());
