import React from "react";
import { Search, Plus } from "lucide-react";
import { useAppContext } from "../../../contexts/AppContext";

const SearchBar = () => {
  const { state, dispatch } = useAppContext();
  const { searchTerm, activeTab } = state;

  const handleSearchChange = (e) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: e.target.value });
  };

  const handleAddClick = () => {
    const modalType =
      activeTab === "courses"
        ? "course"
        : activeTab === "students"
        ? "student"
        : "result";
    dispatch({
      type: "OPEN_MODAL",
      payload: { type: modalType, item: null },
    });
  };

  const getAddButtonText = () => {
    switch (activeTab) {
      case "courses":
        return "Add Course";
      case "students":
        return "Add Student";
      case "results":
        return "Add Result";
      default:
        return "Add";
    }
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        onClick={handleAddClick}
        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
      >
        <Plus size={20} />
        <span>{getAddButtonText()}</span>
      </button>
    </div>
  );
};

export default SearchBar;
