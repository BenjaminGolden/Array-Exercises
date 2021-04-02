import { getStudentsInCohort, getFullTimeStudents, getStudentsByInstructorId,
    getPolyglotStudents, getAvailableInstructors, getStudentsByLanguage, 
} from "./src/filterExercises.js"

import { getStudentNames, StudentList } from "./src/mapExercises.js"

getStudentsInCohort();
getFullTimeStudents();
getStudentsByInstructorId();
getPolyglotStudents();
getAvailableInstructors();
getStudentsByLanguage();
getStudentNames();
StudentList();