import { getStudentsInCohort, getFullTimeStudents, getStudentsByInstructorId,
    getPolyglotStudents, getAvailableInstructors, getStudentsByLanguage, getStudentsByLanguages, 
} from "./src/filterExercises.js"

import { getStudentNames, StudentList } from "./src/mapExercises.js"

getStudentsInCohort();
getFullTimeStudents();
getStudentsByInstructorId();
getPolyglotStudents();
getAvailableInstructors();
getStudentsByLanguage("C#");
getStudentNames();
StudentList();
getStudentsByLanguages(["Javascript", "C#"]);