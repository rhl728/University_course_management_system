import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import Header from "../Header";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Modal from "../Modal";
import CourseList from "../../courses/CourseList";
import StudentList from "../../students/StudentList";
import ResultsTable from "../../results/ResultsTable";

const Layout = () => {
  const { state } = useAppContext();
  const { activeTab, showModal } = state;

  const renderContent = () => {
    switch (activeTab) {
      case "courses":
        return <CourseList />;
      case "students":
        return <StudentList />;
      case "results":
        return <ResultsTable />;
      default:
        return <CourseList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />
        {renderContent()}
      </div>

      {showModal && <Modal />}
    </div>
  );
};

export default Layout;
