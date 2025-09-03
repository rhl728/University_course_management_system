// hooks/useCourses.js
import { useAppContext } from "../contexts/AppContext";
import { filterCourses, sortCoursesByCode } from "../utils/helpers";

export const useCourses = () => {
  const { state, dispatch } = useAppContext();
  const { courses, searchTerm } = state;

  const filteredCourses = filterCourses(courses, searchTerm);
  const sortedCourses = sortCoursesByCode(filteredCourses);

  const addCourse = (courseData) => {
    dispatch({ type: "ADD_COURSE", payload: courseData });
  };

  const updateCourse = (courseData) => {
    dispatch({ type: "UPDATE_COURSE", payload: courseData });
  };

  const deleteCourse = (courseId) => {
    dispatch({ type: "DELETE_COURSE", payload: courseId });
  };

  const getCourseById = (courseId) => {
    return courses.find((course) => course.id === courseId);
  };

  const getCourseByCode = (courseCode) => {
    return courses.find((course) => course.code === courseCode);
  };

  const getTotalEnrollment = () => {
    return courses.reduce((total, course) => total + course.enrolled, 0);
  };

  const getTotalCapacity = () => {
    return courses.reduce((total, course) => total + course.capacity, 0);
  };

  return {
    courses: sortedCourses,
    allCourses: courses,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourseById,
    getCourseByCode,
    getTotalEnrollment,
    getTotalCapacity,
  };
};
