//student -> name , college , age

function student(Name,College,Age){

    this.name = Name,
    this.college = College,
    this.age = Age


}

let student1 = new student ("ABC", "DTU", "23")
let student2 = new student ("PQR", "IGDTUW", "22")

console.log(student1)
console.log(student2);
