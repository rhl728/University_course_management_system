import React, { useEffect } from "react";
import { useAppContext } from "../../../contexts/AppContext";
import Header from "../Header";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Modal from "../Modal";
import CourseList from "../../courses/CourseList";
import StudentList from "../../students/StudentList";
import ResultsTable from "../../results/ResultsTable";
import axios from "axios";

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

  console.log("first>>>");

  // CommonJS require
  // const axios = require('axios')

  // Basic GET request

  // const
  // const response = await axios.get("http://localhost:8080/api/results");
  // console.log(response.data);

  // const fetchResults = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/results");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching results:", error);
  //   }
  // };

  // useEffect(async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/api/results");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching results:", error);
  //   }
  // }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/results");
        console.log("API results:", response.data);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />

      <div className="py-1.5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <SearchBar />
        {renderContent()}
      </div>

      {showModal && <Modal />}
    </div>
  );
};

export default Layout;
