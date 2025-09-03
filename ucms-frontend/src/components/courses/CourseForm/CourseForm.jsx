import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const CourseForm = () => {
  const { state, dispatch } = useAppContext();
  const { formData, editingItem } = state;

  const handleInputChange = (name, value) => {
    dispatch({ type: "SET_FORM_DATA", payload: { [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      ...formData,
      credits: parseInt(formData.credits),
      capacity: parseInt(formData.capacity),
      enrolled: editingItem ? editingItem.enrolled : 0,
    };

    if (editingItem) {
      dispatch({
        type: "UPDATE_COURSE",
        payload: { ...courseData, id: editingItem.id },
      });
    } else {
      dispatch({ type: "ADD_COURSE", payload: courseData });
    }

    dispatch({ type: "CLOSE_MODAL" });
  };

  const departments = [
    "Department of Applied Computing",
    "Department of Computer Systems Engineering",
    "Department of Software Engineering",
  ];

  const semesters = [
    "1st year 2025",
    "2nd year 2025",
    "3rd year 2025",
    "4th year 2025",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Course Code"
          name="code"
          value={formData.code || ""}
          onChange={(e) => handleInputChange("code", e.target.value)}
          placeholder="e.g., CS101"
          required
        />

        <Select
          label="Department"
          name="department"
          value={formData.department || ""}
          onChange={(e) => handleInputChange("department", e.target.value)}
          options={departments.map((dept) => ({ value: dept, label: dept }))}
          placeholder="Select Department"
          required
        />
      </div>

      <Input
        label="Course Title"
        name="title"
        value={formData.title || ""}
        onChange={(e) => handleInputChange("title", e.target.value)}
        placeholder="e.g., Introduction to Computer Science"
        required
      />

      <Input
        label="Instructor"
        name="instructor"
        value={formData.instructor || ""}
        onChange={(e) => handleInputChange("instructor", e.target.value)}
        placeholder="e.g., Dr. Sarah Johnson"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Credits"
          name="credits"
          type="number"
          min="1"
          max="6"
          value={formData.credits || ""}
          onChange={(e) => handleInputChange("credits", e.target.value)}
          placeholder="3"
          required
        />

        <Input
          label="Capacity"
          name="capacity"
          type="number"
          min="1"
          max="200"
          value={formData.capacity || ""}
          onChange={(e) => handleInputChange("capacity", e.target.value)}
          placeholder="50"
          required
        />
      </div>

      <Input
        label="Schedule"
        name="schedule"
        value={formData.schedule || ""}
        onChange={(e) => handleInputChange("schedule", e.target.value)}
        placeholder="e.g., Mon, Wed, Fri 9:00-10:00 AM"
        required
      />

      <Input
        label="Location"
        name="location"
        value={formData.location || ""}
        onChange={(e) => handleInputChange("location", e.target.value)}
        placeholder="e.g., Room 201"
        required
      />

      <Select
        label="Semester"
        name="semester"
        value={formData.semester || ""}
        onChange={(e) => handleInputChange("semester", e.target.value)}
        options={semesters.map((sem) => ({ value: sem, label: sem }))}
        placeholder="Select Semester"
        required
      />

      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="secondary"
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {editingItem ? "Update Course" : "Create Course"}
        </Button>
      </div>
    </form>
  );
};

export default CourseForm;
