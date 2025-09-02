import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import CourseCard from "../courses/CourseCard";

const CourseList = () => {
  const { state } = useAppContext();
  const { courses, searchTerm } = state;

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">
          {searchTerm
            ? "No courses found matching your search."
            : "No courses available."}
        </div>
        {searchTerm && (
          <div className="text-gray-400 text-sm">
            Try adjusting your search terms or add a new course.
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Courses ({filteredCourses.length})
        </h2>
        {searchTerm && (
          <div className="text-sm text-gray-600">
            Showing results for "{searchTerm}"
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
