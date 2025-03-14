console.log("hello ");

fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data)=>console.log(data))



fetch('https://fakestoreapi.com/products')
.then((res)=>{
   return res.json()
})
.then((data)=>{
   return console.log(data);
    
})