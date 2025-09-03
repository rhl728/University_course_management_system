import React from "react";
import { useAppContext } from "../../../contexts/AppContext";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const ResultForm = () => {
  const { state, dispatch } = useAppContext();
  const { formData, editingItem, students, courses } = state;

  const handleInputChange = (name, value) => {
    dispatch({ type: "SET_FORM_DATA", payload: { [name]: value } });
  };

  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    const student = students.find((s) => s.studentId === studentId);

    handleInputChange("studentId", studentId);
    if (student) {
      handleInputChange("studentName", student.name);
    }
  };

  const handleCourseChange = (e) => {
    const courseCode = e.target.value;
    const course = courses.find((c) => c.code === courseCode);

    handleInputChange("courseCode", courseCode);
    if (course) {
      handleInputChange("courseTitle", course.title);
    }
  };

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    handleInputChange("grade", grade);

    // Auto-calculate points based on grade
    const gradePoints = {
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      F: 0.0,
    };

    if (gradePoints[grade] !== undefined) {
      handleInputChange("points", gradePoints[grade]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resultData = {
      ...formData,
      points: parseFloat(formData.points),
    };

    if (editingItem) {
      dispatch({
        type: "UPDATE_RESULT",
        payload: { ...resultData, id: editingItem.id },
      });
    } else {
      dispatch({ type: "ADD_RESULT", payload: resultData });
    }

    dispatch({ type: "CLOSE_MODAL" });
  };

  const grades = [
    { value: "A", label: "A" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B", label: "B" },
    { value: "B-", label: "B-" },
    { value: "C+", label: "C+" },
    { value: "C", label: "C" },
    { value: "C-", label: "C-" },
    { value: "D+", label: "D+" },
    { value: "D", label: "D" },
    { value: "F", label: "F" },
  ];

  const semesters = [
    "Fall 2024",
    "Spring 2024",
    "Summer 2024",
    "Fall 2023",
    "Spring 2025",
  ];

  const studentOptions = students.map((student) => ({
    value: student.studentId,
    label: `${student.name} (${student.studentId})`,
  }));

  const courseOptions = courses.map((course) => ({
    value: course.code,
    label: `${course.code} - ${course.title}`,
  }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Student"
          name="studentId"
          value={formData.studentId || ""}
          onChange={handleStudentChange}
          options={studentOptions}
          placeholder="Select Student"
          required
        />

        <Input
          label="Student Name"
          name="studentName"
          value={formData.studentName || ""}
          onChange={(e) => handleInputChange("studentName", e.target.value)}
          placeholder="Auto-filled from student selection"
          readOnly
          className="bg-gray-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Course"
          name="courseCode"
          value={formData.courseCode || ""}
          onChange={handleCourseChange}
          options={courseOptions}
          placeholder="Select Course"
          required
        />

        <Input
          label="Course Title"
          name="courseTitle"
          value={formData.courseTitle || ""}
          onChange={(e) => handleInputChange("courseTitle", e.target.value)}
          placeholder="Auto-filled from course selection"
          readOnly
          className="bg-gray-50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Grade"
          name="grade"
          value={formData.grade || ""}
          onChange={handleGradeChange}
          options={grades}
          placeholder="Select Grade"
          required
        />

        <Input
          label="Grade Points"
          name="points"
          type="number"
          step="0.1"
          min="0"
          max="4"
          value={formData.points || ""}
          onChange={(e) => handleInputChange("points", e.target.value)}
          placeholder="Auto-calculated from grade"
          required
        />
      </div>

      <Select
        label="Semester"
        name="semester"
        value={formData.semester || ""}
        onChange={(e) => handleInputChange("semester", e.target.value)}
        options={semesters.map((sem) => ({ value: sem, label: sem }))}
        placeholder="Select Semester"
        required
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="text-sm text-blue-800">
          <strong>Note:</strong> Grade points are automatically calculated based
          on the selected grade. You can manually adjust them if needed.
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
          {editingItem ? "Update Result" : "Create Result"}
        </Button>
      </div>
    </form>
  );
};

export default ResultForm;
