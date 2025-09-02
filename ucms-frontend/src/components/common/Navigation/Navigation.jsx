import React from "react";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";

const Navigation = () => {
  const { state, dispatch } = useAppContext();
  const { activeTab } = state;

  const tabs = [
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "students", label: "Students", icon: Users },
    { id: "results", label: "Results", icon: GraduationCap },
  ];

  const handleTabChange = (tabId) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: tabId });
    dispatch({ type: "SET_SEARCH_TERM", payload: "" }); // Clear search when switching tabs
  };

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTabChange(id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
