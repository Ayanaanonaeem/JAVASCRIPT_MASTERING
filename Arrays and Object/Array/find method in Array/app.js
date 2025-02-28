const employees = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      salary: 80000
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      salary: 95000
    },
    {
      id: 3,
      name: 'Sam Brown',
      position: 'Designer',
      salary: 70000
    },
    {
      id: 4,
      name: 'Emily Davis',
      position: 'QA Tester',
      salary: 60000
    }
  ];

  var employeesfind=employees.find((user)=>{
    return user.name=='Emily Davis'
  })

  console.log(employeesfind);
  

//   delete is also use in array for deleting something
  delete employees[2]

  console.log(employees);
  