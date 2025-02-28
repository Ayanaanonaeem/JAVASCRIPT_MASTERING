// const users1 = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 },
//     { id: 3, name: 'Charlie', age: 35 }
//   ];

//   let finduser=users.find((user)=>{
     
//     return user.id==2
    
//   })

//   console.log(finduser);
  

  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
  ];

  let finding_user=users.find(user=>user.name=="Bob")

  console.log(finding_user);
  
  