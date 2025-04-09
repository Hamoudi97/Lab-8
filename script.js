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
