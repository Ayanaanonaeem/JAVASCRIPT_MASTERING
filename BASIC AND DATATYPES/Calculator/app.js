var input=document.getElementById("input")

let uservalue;
let calculatevalue;
function appendtodisplay(val) {
    uservalue=val
     input.value+=uservalue
}

function calculate(val) {
    calculatevalue=eval(input.value)
    input.value=""
    input.value+=calculatevalue

}
function clearscreen(val) {
    input.value=""
}