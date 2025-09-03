import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import StudentCard from "../StudentCard";

const StudentList = () => {
  const { state } = useAppContext();
  const { students, searchTerm } = state;

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredStudents.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">
          {searchTerm
            ? "No students found matching your search."
            : "No students available."}
        </div>
        {searchTerm && (
          <div className="text-gray-400 text-sm">
            Try adjusting your search terms or add a new student.
          </div>
        )}
      </div>
    );
  }

  const averageGPA =
    filteredStudents.reduce((sum, student) => sum + student.gpa, 0) /
    filteredStudents.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Students ({filteredStudents.length})
          </h2>
          <div className="text-sm text-gray-600 mt-1">
            Average GPA:{" "}
            <span className="font-semibold">{averageGPA.toFixed(2)}</span>
          </div>
        </div>
        {searchTerm && (
          <div className="text-sm text-gray-600">
            Showing results for "{searchTerm}"
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
