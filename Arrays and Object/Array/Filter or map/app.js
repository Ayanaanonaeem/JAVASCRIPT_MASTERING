// both give a new array

// filter or map yani FM gives a new array
// it doesn't change the original array

// 8888888888888888888888888888 FILTER 88888888888888888888888888888888888888//

// ye kuch operation krke array main hamen new array deta hai

var arr=[1,2,3,4,5,6,7,8,9,10]

var evennumber=arr.filter((num)=>{
    return num%2==0
})

console.log(evennumber);

var oddnumber=arr.filter((num)=>{
    return num%2==1
})

console.log(oddnumber);


// 888888888888888888888888888888888 MAP 8888888888888888888888888888888888888888  //

// YE HAMMEN ARRAY KE HAR ELEMENT MAIN KUCH OPERATION KRKE DETA HAI 

// is main hum filter out nhi krasakte jesa ke num > 3 ye nhi nikall sakte

var multiplyarr=arr.map((num)=>{
   
    return num*3
  
})

console.log(multiplyarr);
