import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const StudentForm = () => {
  const { state, dispatch } = useAppContext();
  const { formData, editingItem } = state;

  const handleInputChange = (name, value) => {
    dispatch({ type: "SET_FORM_DATA", payload: { [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      ...formData,
      gpa: parseFloat(formData.gpa),
      registeredCourses: editingItem ? editingItem.registeredCourses : [],
    };

    if (editingItem) {
      dispatch({
        type: "UPDATE_STUDENT",
        payload: { ...studentData, id: editingItem.id },
      });
    } else {
      dispatch({ type: "ADD_STUDENT", payload: studentData });
    }

    dispatch({ type: "CLOSE_MODAL" });
  };

  const majors = [
    "Computer Science",
    "Mathematics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Psychology",
    "Business Administration",
    "Engineering",
    "Art",
    "Music",
    "Philosophy",
    "Political Science",
    "Economics",
  ];

  const years = [
    { value: "Freshman", label: "Freshman" },
    { value: "Sophomore", label: "Sophomore" },
    { value: "Junior", label: "Junior" },
    { value: "Senior", label: "Senior" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Student ID"
          name="studentId"
          value={formData.studentId || ""}
          onChange={(e) => handleInputChange("studentId", e.target.value)}
          placeholder="e.g., STU001"
          required
        />

        <Input
          label="Full Name"
          name="name"
          value={formData.name || ""}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="e.g., John Doe"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="e.g., john.doe@university.edu"
          required
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone || ""}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="e.g., (555) 123-4567"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Major"
          name="major"
          value={formData.major || ""}
          onChange={(e) => handleInputChange("major", e.target.value)}
          options={majors.map((major) => ({ value: major, label: major }))}
          placeholder="Select Major"
          required
        />

        <Select
          label="Academic Year"
          name="year"
          value={formData.year || ""}
          onChange={(e) => handleInputChange("year", e.target.value)}
          options={years}
          placeholder="Select Year"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="GPA"
          name="gpa"
          type="number"
          step="0.01"
          min="0"
          max="4"
          value={formData.gpa || ""}
          onChange={(e) => handleInputChange("gpa", e.target.value)}
          placeholder="e.g., 3.75"
          required
        />
        <div className="flex items-end">
          <div className="text-sm text-gray-500 pb-2">
            GPA should be between 0.00 and 4.00
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="secondary"
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {editingItem ? "Update Student" : "Create Student"}
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
