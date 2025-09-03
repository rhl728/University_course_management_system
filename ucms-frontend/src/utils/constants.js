// Grade point mapping
export const GRADE_POINTS = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

// Available grades
export const GRADES = [
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "F",
];

// Academic years
export const ACADEMIC_YEARS = ["Freshman", "Sophomore", "Junior", "Senior"];

// Departments
export const DEPARTMENTS = [
  "Department of Applied Computing",
  "Department of Computer Systems Engineering",
  "Department of Software Engineering",
];

// Semesters
export const SEMESTERS = [
  "1st year 2025",
  "2nd year 2025",
  "3rd year 2025",
  "4th year 2025",
];

// Majors (can be same as departments for simplicity)
export const MAJORS = DEPARTMENTS;

// Modal types
export const MODAL_TYPES = {
  COURSE: "course",
  STUDENT: "student",
  RESULT: "result",
};

// Tab types
export const TABS = {
  COURSES: "courses",
  STUDENTS: "students",
  RESULTS: "results",
};

// Action types for reducer
export const ACTION_TYPES = {
  SET_ACTIVE_TAB: "SET_ACTIVE_TAB",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SELECTED_SEMESTER: "SET_SELECTED_SEMESTER",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_FORM_DATA: "SET_FORM_DATA",

  // Course actions
  ADD_COURSE: "ADD_COURSE",
  UPDATE_COURSE: "UPDATE_COURSE",
  DELETE_COURSE: "DELETE_COURSE",

  // Student actions
  ADD_STUDENT: "ADD_STUDENT",
  UPDATE_STUDENT: "UPDATE_STUDENT",
  DELETE_STUDENT: "DELETE_STUDENT",

  // Result actions
  ADD_RESULT: "ADD_RESULT",
  UPDATE_RESULT: "UPDATE_RESULT",
  DELETE_RESULT: "DELETE_RESULT",
};
