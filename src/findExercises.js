import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function called getStudentById
// It should accept one integer parameter named `id`
// It should return the student object with the matching ID
// Ex: getStudentById(1)

export const getStudentById = (id) => {
    let studentObj = students.find(student => student.id === id)
    return studentObj;
}

// Export a function called getInstructorById
// It should accept one integer parameter named `id`
// It should return the instructor object with the matching ID
// Ex: getInstructorById(1)

export const getInstructorById = (id) => {
    let instructorObj = instructors.find(instructor => instructor.id === id)
    return instructorObj;
}

// Export a function called getStudentByLastName
// It should accept one string parameter named `lastName`
// It should return the student object whose last name matches `lastName`
// It should NOT be case sensitive
// Ex: getStudentByName("sMiTh")

export const getStudentByLastName = (lastName) => {
    let studentObj = students.find(student => student.lastName.toLowerCase() === lastName.toLowerCase())
    return studentObj;
}


// Export a function called getStudentByName
// It should accept one string parameter named `fullName`
// It should return the student object whose first and last name match `fullName`
// It should NOT be case sensitive
// Ex: getStudentByName("Summer SMITH")

export const getStudentByName = (fullName) => {
    let studentObj = students.find(student => student.firstName.toLowerCase() + ' ' + student.lastName.toLowerCase() === fullName.toLowerCase())
    return studentObj;
}

// Export a function called getInstructorOfStudent
// It should accept one integeter parameter named `studentId`
// It should return the instructor object of the student whose id matches `studentId`
// Ex: getInstructorOfStudent(4)      // returns Brenda Long

export const getInstructorOfStudent = (studentId) => {
    const studentObj = students.find(student => student.id === studentId)
    const instructorObj = instructors.find(instructor => instructor.id === studentObj.instructorId)
    return instructorObj

    // let instructorObj = instructors.find(instructor => {
    //     if(students.some(student => student.instructorId === studentId) === instructor.id)
    // return instructorObj;
    // })
}



// Export a function called getStudentWithMostLangs
// It should not accept any parameters
// It should return the student object who knows the most programming languages
// Ex: getStudentWithMostLangs()      // returns Rick Sanchez
// HINT: You may not need the `find` method for this. This is one of the few cases where a `for` loop might be appropriate

//we set a default for the highestNumberOfLanguages = 0;
//then we set an empty object equal to the studentWithHighestNumberOfLanguages = {};
//in the for statement we are evaluating one student of the students array.
//if the student.languages.length property is higher than the highestNumberOfLanguages;
//store that student in the studentWithHighestNumberOfLanguages object;
//also update the highestNumberOfLanguages with the student.languages.length
//finally we return the studentWithHighestNumberOfLanguages after the loop has finished running. 
export const getStudentWithMostLangs = () => {
    let highestNumberOfLanguages = 0;
    let studentWithHighestNumberOfLanguages = {};
    for (const student of students){
        if (student.languages.length > highestNumberOfLanguages){
            studentWithHighestNumberOfLanguages = student;
            highestNumberOfLanguages = student.languages.length;
        }
    }
    return studentWithHighestNumberOfLanguages;
}

//alternate way of writing the same function is to use the .reduce method
//.reduce takes two arguments, previous and current. 
//we are iterating through the array of students and searching the current index object.languages.length against the previous.
//we then return the greater value through a ternary statement

// export const getStudentWithMostLangs = () => {
//     const studentWithMostLanguages = students.reduce((previous, current) => {
//     return current.languages.length > previous.languages.length ? current : previous;
//     })

//     return studentWithMostLanguages
// }

