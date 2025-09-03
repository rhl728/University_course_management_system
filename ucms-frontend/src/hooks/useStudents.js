// hooks/useStudents.js
import { useAppContext } from "../contexts/AppContext";
import {
  filterStudents,
  sortStudentsByName,
  calculateAverageGPA,
} from "../utils/helpers";

export const useStudents = () => {
  const { state, dispatch } = useAppContext();
  const { students, searchTerm } = state;

  const filteredStudents = filterStudents(students, searchTerm);
  const sortedStudents = sortStudentsByName(filteredStudents);

  const addStudent = (studentData) => {
    dispatch({ type: "ADD_STUDENT", payload: studentData });
  };

  const updateStudent = (studentData) => {
    dispatch({ type: "UPDATE_STUDENT", payload: studentData });
  };

  const deleteStudent = (studentId) => {
    dispatch({ type: "DELETE_STUDENT", payload: studentId });
  };

  const getStudentById = (studentId) => {
    return students.find((student) => student.id === studentId);
  };

  const getStudentByStudentId = (studentId) => {
    return students.find((student) => student.studentId === studentId);
  };

  const getAverageGPA = () => {
    return calculateAverageGPA(students);
  };

  const getStudentsByMajor = (major) => {
    return students.filter((student) => student.major === major);
  };

  const getStudentsByYear = (year) => {
    return students.filter((student) => student.year === year);
  };

  return {
    students: sortedStudents,
    allStudents: students,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
    getStudentByStudentId,
    getAverageGPA,
    getStudentsByMajor,
    getStudentsByYear,
  };
};
