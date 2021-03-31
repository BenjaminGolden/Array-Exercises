import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export const getStudentsInCohort = (cohort) => {
    let studentsArray = students.filter(students => {
        return students.cohort === cohort;
    })
    // console.log(studentsArray)
   return studentsArray;
}

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
    let studentsArray = students.filter(students => {
        return students.fullTime === true
    })
    // console.log(studentsArray)
    return studentsArray;
}

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (instructorId) => {
    let studentsArray = students.filter(students => {
        return students.instructorId === instructorId;
    })
    // console.log(studentsArray)
    return studentsArray;
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents = (languageCount) => {
    let studentsArray = students.filter(students => {
        return students.languages.length >= languageCount;
    })
    // console.log(studentsArray)
    return studentsArray;
}
// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students

//i want to say that if an instructor id isn't present, return those instructors.
export const getAvailableInstructors = () => {
    const instructorArray = instructors.filter(instructor => !students.some(student => student.instructorId === instructor.id))
    return instructorArray;
}
//iterate through the instructors array and filter the instructor whose id is equal to the instructor id in the student array.
//we want the opposite of the matching results so we use the not equal opperator !.



// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

export const getStudentsByLanguage = (language) => {
//    let studentsLanguageArray = students.some(student => student.languages === language)
//    console.log(studentsLanguageArray);
        const studentsThatMatchLanguage = students.filter(student => student.languages.some(studentLanguage => studentLanguage === language))
            return studentsThatMatchLanguage;
}
   


/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
