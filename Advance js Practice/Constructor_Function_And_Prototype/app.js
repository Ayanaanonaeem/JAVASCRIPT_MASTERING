// 888888888888888888888888888888888 Constructor function  888888888888888888888888888

 
function Student(name,fathername,age,totalclasses){
   this.name=name,
   this.fathername=fathername,
   this.age=age,
   this.totalclasses=totalclasses
}


Student.prototype.totalclasses=60

var obj1=new Student("ayan","Naeem",19,60)
var obj2=new Student("taha","Jamil",29,40)
var obj2=new Student("moiz","Abid",29,20)
console.log(obj1);



function Student(name,fathername,age,totalclass){
  this.name=name,
  this.fathername=fathername,
  this.age=age,
  this.totalclass=totalclass

}