import React from "react";
import { useAppContext } from "../../../contexts/AppContext";

const Header = () => {
  const { state, dispatch } = useAppContext();
  const { selectedSemester } = state;

  const handleSemesterChange = (e) => {
    dispatch({ type: "SET_SELECTED_SEMESTER", payload: e.target.value });
  };

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              University Course Management System
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* <select
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Fall 2024</option>
              <option>Spring 2024</option>
              <option>Summer 2024</option>
            </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
