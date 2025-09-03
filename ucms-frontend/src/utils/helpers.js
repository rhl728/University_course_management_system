import { GRADE_POINTS } from "./constants";

// Grade utility functions
export const getGradePoints = (grade) => {
  return GRADE_POINTS[grade] || 0;
};

export const getGradeColor = (grade) => {
  if (grade.startsWith("A")) return "bg-green-100 text-green-800";
  if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
  if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800";
  if (grade.startsWith("D")) return "bg-orange-100 text-orange-800";
  return "bg-red-100 text-red-800";
};

export const getGPAColor = (gpa) => {
  if (gpa >= 3.5) return "text-green-600";
  if (gpa >= 3.0) return "text-blue-600";
  if (gpa >= 2.5) return "text-yellow-600";
  return "text-red-600";
};

export const getYearColor = (year) => {
  const colors = {
    Freshman: "bg-green-100 text-green-800",
    Sophomore: "bg-blue-100 text-blue-800",
    Junior: "bg-yellow-100 text-yellow-800",
    Senior: "bg-purple-100 text-purple-800",
  };
  return colors[year] || "bg-gray-100 text-gray-800";
};

// Enrollment utility functions
export const getEnrollmentColor = (enrolled, capacity) => {
  const percentage = (enrolled / capacity) * 100;
  if (percentage >= 90) return "bg-red-500";
  if (percentage >= 70) return "bg-yellow-500";
  return "bg-blue-500";
};

export const getEnrollmentStatus = (enrolled, capacity) => {
  const percentage = (enrolled / capacity) * 100;
  if (percentage >= 100) return "Full";
  if (percentage >= 90) return "Nearly Full";
  if (percentage >= 70) return "Filling Up";
  return "Available";
};

// Search and filter utilities
export const filterCourses = (courses, searchTerm) => {
  if (!searchTerm) return courses;

  const term = searchTerm.toLowerCase();
  return courses.filter(
    (course) =>
      course.title.toLowerCase().includes(term) ||
      course.code.toLowerCase().includes(term) ||
      course.instructor.toLowerCase().includes(term) ||
      course.department.toLowerCase().includes(term)
  );
};

export const filterStudents = (students, searchTerm) => {
  if (!searchTerm) return students;

  const term = searchTerm.toLowerCase();
  return students.filter(
    (student) =>
      student.name.toLowerCase().includes(term) ||
      student.studentId.toLowerCase().includes(term) ||
      student.major.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term)
  );
};

export const filterResults = (results, searchTerm) => {
  if (!searchTerm) return results;

  const term = searchTerm.toLowerCase();
  return results.filter(
    (result) =>
      result.studentName.toLowerCase().includes(term) ||
      result.studentId.toLowerCase().includes(term) ||
      result.courseCode.toLowerCase().includes(term) ||
      result.courseTitle.toLowerCase().includes(term) ||
      result.grade.toLowerCase().includes(term)
  );
};

// Statistics utilities
export const calculateAverageGPA = (students) => {
  if (students.length === 0) return 0;
  const totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
  return totalGPA / students.length;
};

export const calculateAveragePoints = (results) => {
  if (results.length === 0) return 0;
  const totalPoints = results.reduce((sum, result) => sum + result.points, 0);
  return totalPoints / results.length;
};

export const getTotalEnrollment = (courses) => {
  return courses.reduce((total, course) => total + course.enrolled, 0);
};

export const getTotalCapacity = (courses) => {
  return courses.reduce((total, course) => total + course.capacity, 0);
};

// Form validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const validateGPA = (gpa) => {
  const numGPA = parseFloat(gpa);
  return !isNaN(numGPA) && numGPA >= 0 && numGPA <= 4;
};

export const validateCourseCode = (code) => {
  // Basic validation: should have letters followed by numbers
  const codeRegex = /^[A-Z]+\d+$/;
  return codeRegex.test(code);
};

export const validateStudentId = (studentId) => {
  // Basic validation: should start with STU followed by numbers
  const idRegex = /^STU\d+$/;
  return idRegex.test(studentId);
};

// Format utilities
export const formatPhone = (phone) => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return phone;
};

export const formatGPA = (gpa, decimals = 2) => {
  return parseFloat(gpa).toFixed(decimals);
};

// Date utilities
export const getCurrentSemester = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // JavaScript months are 0-indexed

  if (month >= 1 && month <= 5) {
    return `Spring ${year}`;
  } else if (month >= 6 && month <= 8) {
    return `Summer ${year}`;
  } else {
    return `Fall ${year}`;
  }
};

// Sort utilities
export const sortCoursesByCode = (courses) => {
  return [...courses].sort((a, b) => a.code.localeCompare(b.code));
};

export const sortStudentsByName = (students) => {
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortResultsByGrade = (results) => {
  const gradeOrder = [
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
  return [...results].sort((a, b) => {
    const aIndex = gradeOrder.indexOf(a.grade);
    const bIndex = gradeOrder.indexOf(b.grade);
    return aIndex - bIndex;
  });
};
