import React from "react";
import { Edit3, Trash2, User, Award, Clock, MapPin } from "lucide-react";
import { useAppContext } from "../../../contexts/AppContext";

const CourseCard = ({ course }) => {
  const { dispatch } = useAppContext();

  const handleEdit = () => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { type: "course", item: course },
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch({ type: "DELETE_COURSE", payload: course.id });
    }
  };

  const enrollmentPercentage = (course.enrolled / course.capacity) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{course.code}</h3>
          <p className="text-lg text-gray-600 mt-1">{course.title}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit Course"
          >
            <Edit3 size={18} />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete Course"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <User size={16} className="mr-2 flex-shrink-0" />
          <span className="truncate">{course.instructor}</span>
        </div>
        <div className="flex items-center">
          <Award size={16} className="mr-2 flex-shrink-0" />
          <span>{course.credits} Credits</span>
        </div>
        <div className="flex items-center col-span-2">
          <Clock size={16} className="mr-2 flex-shrink-0" />
          <span className="truncate">{course.schedule}</span>
        </div>
        <div className="flex items-center col-span-2">
          <MapPin size={16} className="mr-2 flex-shrink-0" />
          <span className="truncate">{course.location}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Enrollment</span>
          <span className="text-sm font-medium text-gray-900">
            {course.enrolled}/{course.capacity}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              enrollmentPercentage >= 90
                ? "bg-red-500"
                : enrollmentPercentage >= 70
                ? "bg-yellow-500"
                : "bg-blue-500"
            }`}
            style={{ width: `${enrollmentPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {course.department}
          </span>
          <span className="text-xs text-gray-500">{course.semester}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
