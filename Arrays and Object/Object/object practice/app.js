var username=document.getElementById("name")
var role=document.getElementById("role")
var salary=document.getElementById("salary")
var education=document.getElementById("education")

function login() {
    
    var obj={
      name:username.value,
      Role:role.value,
      salary:salary.value,
      education:education.value
    }
    console.log(obj);
}






