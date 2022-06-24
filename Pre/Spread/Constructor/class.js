class Person {
    constructor(name,age)
    {
        this.name = name,
        this.age = age
    }
}

class Teacher extends Person {
  constructor(name,age,teacherID)
  {   super(name,age)     //it tells what all properties child is inheriting from its parent
      this.teacherID = teacherID
  }

}

class Student extends Person {
  constructor(name,age,studentID)
  {   super(name,age)     //it tells what all properties child is inheriting from its parent
      this.studentID = studentID
  }
}


let person1 = new Person("Paul", "20")
let person2 = new Person("ABC", "23")
let teacher1= new Teacher("Mark", "40", "EmployeeID-10")
let student1 = new Student("Adam", "21", "StudentID-40")
console.log(person1);
console.log(person2);
console.log(teacher1);
console.log(student1);