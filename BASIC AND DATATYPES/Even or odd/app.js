var usernum=+prompt("write a number")
var head=document.getElementById("head")

function evenodd(usernum) {
    if (usernum%2==0) {
        return true
    } else {
        return false
    }
}

var result=evenodd(usernum)


if (result==true) {
    head.innerText="The number is even"
} else {
     head.innerText="The number is odd"
}
