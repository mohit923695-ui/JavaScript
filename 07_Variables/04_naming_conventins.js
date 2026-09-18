//using ai for practise



// 1. camelCase → Variables & Functions
let studentName = "Mohit";
let studentAge = 19;

function calculateMarks() {
    console.log("Calculating marks...");
}


// 2. PascalCase → Classes
class StudentProfile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// 3. UPPER_SNAKE_CASE → Constants
const MAX_MARKS = 100;
const COLLEGE_NAME = "MCAET";


// Using them
let student = new StudentProfile(studentName, studentAge);

console.log(student);
console.log(MAX_MARKS);
console.log(COLLEGE_NAME);

calculateMarks();