import React, { createContext, useContext, useReducer } from "react";
import { mockData } from "../data/mockData";

const AppContext = createContext();

const initialState = {
  courses: mockData.courses,
  students: mockData.students,
  results: mockData.results,
  activeTab: "courses",
  searchTerm: "",
  selectedSemester: "Fall 2024",
  showModal: false,
  modalType: "",
  editingItem: null,
  formData: {},
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };

    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };

    case "SET_SELECTED_SEMESTER":
      return { ...state, selectedSemester: action.payload };

    case "OPEN_MODAL":
      return {
        ...state,
        showModal: true,
        modalType: action.payload.type,
        editingItem: action.payload.item,
        formData: action.payload.item || {},
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        showModal: false,
        modalType: "",
        editingItem: null,
        formData: {},
      };

    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };

    case "ADD_COURSE":
      return {
        ...state,
        courses: [
          ...state.courses,
          { ...action.payload, id: Date.now(), enrolled: 0 },
        ],
      };

    case "UPDATE_COURSE":
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === action.payload.id ? action.payload : course
        ),
      };

    case "DELETE_COURSE":
      return {
        ...state,
        courses: state.courses.filter((course) => course.id !== action.payload),
      };

    case "ADD_STUDENT":
      return {
        ...state,
        students: [
          ...state.students,
          { ...action.payload, id: Date.now(), registeredCourses: [] },
        ],
      };

    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "ADD_RESULT":
      return {
        ...state,
        results: [...state.results, { ...action.payload, id: Date.now() }],
      };

    case "UPDATE_RESULT":
      return {
        ...state,
        results: state.results.map((result) =>
          result.id === action.payload.id ? action.payload : result
        ),
      };

    case "DELETE_RESULT":
      return {
        ...state,
        results: state.results.filter((result) => result.id !== action.payload),
      };

    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
