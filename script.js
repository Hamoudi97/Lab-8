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

let scores = [100, 90, 80, 70, 60]; // Used in bonus task later on

let [first, second] = scores;
console.log(first, second);

// Part 4: The Spread Operator

let clonedStudent = { ...student, weaponProficiency: "Master" };

console.log(clonedStudent);

let combinedCourses = [
  ...student.courses,
  "Relationship Building",
  "Exploration",
  "Trade Skills",
];

console.log(combinedCourses);

// Part 5: Object Methods

student.addCourse = function addCourse(newCourse) {
  this.courses.push(newCourse);
};

student.addCourse("Stealing");

console.log(student);

student.totalCourses = function totalCourses() {
  return this.courses.length;
};

console.log(student.totalCourses());

// Bonus Task

let averageScore = scores.reduce((accumulator, score, index, array) => {
  accumulator += score;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}, 0);

console.log(averageScore);
