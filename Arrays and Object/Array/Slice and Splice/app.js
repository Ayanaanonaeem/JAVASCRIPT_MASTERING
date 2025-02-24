//88888888888888888888888888888  Slice Method 88888888888888888888888888888888888 //
// 1. Slice is used to copy the array Element
// 2. Slice is used in string also

var arr=[1,2,3,4,5,6,7,8,9,10]
var newarr= arr.slice(3,8)

console.log(newarr);
 
var name="abdulRehman"
var newname=name.slice(5)
console.log(newname);


//88888888888888888888888888888  Splice Method 88888888888888888888888888888888888 //
// 1. it used to add or remove element from array
// 2. pehla chez hamare pass johti hai woh hota hai index kahan se changes krni hai apne
// 3. dosri chez kitne number delete krne hai apne 
// 4. teesri chez usjgh pr yani us index pr kr koi aur sa no dalna chahen to dalsakte hain

var arr=[1,2,3,4,5,6,7,8,8,9,]
var newarr=arr.splice(8,1,7)
console.log(arr);

