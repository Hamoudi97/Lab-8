// Part 1: Understanding and Creating Objects

let student = {
  name: "Arthur Morgan",
  age: 36,
  enrolled: true,
  courses: [
    "Horse Riding",
    "Hunting",
    "Survival",
    "Marksmanship",
    "Hand-to-Hand Combat",
  ],
  greet: function () {
    console.log(
      `Hello! My name is ${this.name} and I am ${this.age} years old.\nI am ${
        this.enrolled ? "enrolled" : "Not enrolled"
      } in the following courses:\n${this.courses.join(", ")}.`
    );
  },
};

console.log(student.name);
console.log(student.age);
student.greet();

// Part 2: Working with JSON
let jsonStudent = JSON.stringify(student);

console.log(jsonStudent);

let jsStudent = JSON.parse(jsonStudent);

console.log("Original student object:");
console.log(student);

console.log("Parsed student object:");
console.log(jsStudent);

// Part 3: Using Destructuring Assignment

let { name: studentName, courses: studentCourses } = student;

console.log(studentName);
console.log(studentCourses);

let scores = [100, 90, 80, 70, 60];

let [first, second] = scores;
console.log(first, second);
