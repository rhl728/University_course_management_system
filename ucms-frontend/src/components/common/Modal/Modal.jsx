import React from "react";
import { X } from "lucide-react";
import { useAppContext } from "../../../contexts/AppContext";
import CourseForm from "../../courses/CourseForm";
import StudentForm from "../../students/StudentForm";
import ResultForm from "../../results/ResultForm";

const Modal = () => {
  const { state, dispatch } = useAppContext();
  const { modalType, editingItem } = state;

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const getModalTitle = () => {
    const action = editingItem ? "Edit" : "Add";
    switch (modalType) {
      case "course":
        return `${action} Course`;
      case "student":
        return `${action} Student`;
      case "result":
        return `${action} Result`;
      default:
        return "Form";
    }
  };

  const renderForm = () => {
    switch (modalType) {
      case "course":
        return <CourseForm />;
      case "student":
        return <StudentForm />;
      case "result":
        return <ResultForm />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            {getModalTitle()}
          </h3>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
