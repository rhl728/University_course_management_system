import React from "react";
import { Edit3, Trash2, Mail, Phone, BookOpen } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";

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
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{student.name}</h2>
        <p className={`text-sm ${getGPAColor(student.gpa)}`}>
          GPA: {student.gpa}
        </p>
        <span
          className={`text-xs px-2 py-1 rounded ${getYearColor(student.year)}`}
        >
          {student.year}
        </span>
        <div className="flex gap-2 text-sm mt-2 text-gray-600">
          <Mail size={16} /> {student.email}
          <Phone size={16} /> {student.phone}
          <BookOpen size={16} /> {student.major}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"
        >
          <Edit3 size={20} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:bg-red-100 rounded-full"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
