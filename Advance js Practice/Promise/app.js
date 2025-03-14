// promise hamen callback hell se bachata hai 

isValid=true

// promise hamare pass do parameter leta hai ek resolve or dosra reject agr reslove hoga to then main jayega or agr reject hoga
// to catch main jayega 

let p= new Promise((resolve, reject) => {
    if (isValid) {
       resolve("user login") 
        
    } else {
        reject("there is something wrong due to which user cannot login")
        
    }
})

p.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))