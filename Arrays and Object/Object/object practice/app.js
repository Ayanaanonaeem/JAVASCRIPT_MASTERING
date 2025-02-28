var username=document.getElementById("name")
var role=document.getElementById("role")
var salary=document.getElementById("salary")
var education=document.getElementById("education")
 

function login() {
    
     var  obj={
      name:username.value,
      Role:role.value,
      salary:salary.value,
      education:education.value
    }
    console.log(obj);
}


var  obj2={
    name:"furqan",
    Role:"Programmer",
    salary:"1 crore",
    education:"undergraduate"
  }


console.log(obj2);

// for deleting some property we use delete
delete obj2.name

console.log(obj2);




