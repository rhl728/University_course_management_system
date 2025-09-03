import React from "react";
import { Edit3, Trash2, Mail, Phone, BookOpen } from "lucide-react";
import { useAppContext } from "../../../contexts/AppContext";

const StudentCard = ({ student }) => {
  const { dispatch } = useAppContext();

  const handleEdit = () => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { type: "student", item: student },
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch({ type: "DELETE_STUDENT", payload: student.id });
    }
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 3.5) return "text-green-600";
    if (gpa >= 3.0) return "text-blue-600";
    if (gpa >= 2.5) return "text-yellow-600";
    return "text-red-600";
  };

  const getYearColor = (year) => {
    const colors = {
      Freshman: "bg-green-100 text-green-800",
      Sophomore: "bg-blue-100 text-blue-800",
      Junior: "bg-yellow-100 text-yellow-800",
      Senior: "bg-purple-100 text-purple-800",
    };
    return colors[year] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {student.name}
          </h3>
          <p className="text-sm text-gray-600">{student.studentId}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit Student"
          >
            <Edit3 size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete Student"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <Mail size={16} className="mr-2 flex-shrink-0" />
          <span className="truncate">{student.email}</span>
        </div>
        <div className="flex items-center">
          <Phone size={16} className="mr-2 flex-shrink-0" />
          <span>{student.phone}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-500">Major:</span>
            <div className="font-medium text-gray-900">{student.major}</div>
          </div>
          <div>
            <span className="text-gray-500">Year:</span>
            <div>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getYearColor(
                  student.year
                )}`}
              >
                {student.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <BookOpen size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">
            {student.registeredCourses?.length || 0} Courses
          </span>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">GPA</div>
          <div className={`text-lg font-bold ${getGPAColor(student.gpa)}`}>
            {student.gpa}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
