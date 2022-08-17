var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach
const Teacher = function () {};
//!Seting paarent as Person for Teacher class
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
//!Creating a function named teach in child class Teacher
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

//!object initalisation
var teacher = new Teacher();
//! setting values of for the prperty name and age
teacher.initialize('Adam', 45);
//!Invoking function name teach
teacher.teach('Inheritance');

//! Output: Adam is now teaching Inheritance
