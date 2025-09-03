package com.example.UCMS.model;

import jakarta.persistence.*;

@Entity
@Table(name = "results") // optional but good practice
public class Result {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)   // studentId should not be null
    private String studentId;

    private String studentName;

    @Column(nullable = false)   // courseCode should not be null
    private String courseCode;

    private String courseTitle;

    private String grade;

    private double points;

    private String semester;

    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }

    public String getStudentName() { return studentName; }
    public void setStudentName(String studentName) { this.studentName = studentName; }

    public String getCourseCode() { return courseCode; }
    public void setCourseCode(String courseCode) { this.courseCode = courseCode; }

    public String getCourseTitle() { return courseTitle; }
    public void setCourseTitle(String courseTitle) { this.courseTitle = courseTitle; }

    public String getGrade() { return grade; }
    public void setGrade(String grade) { this.grade = grade; }

    public double getPoints() { return points; }
    public void setPoints(double points) { this.points = points; }

    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }
}
