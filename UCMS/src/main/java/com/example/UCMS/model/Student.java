package com.example.UCMS.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentId;
    private String name;
    private String email;
    private String phone;
    private String major;

    // renamed from "year" → "studentYear"
    private String studentYear;

    private double gpa;

    @ElementCollection
    private List<Long> registeredCourses;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getMajor() { return major; }
    public void setMajor(String major) { this.major = major; }

    public String getStudentYear() { return studentYear; }
    public void setStudentYear(String studentYear) { this.studentYear = studentYear; }

    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { this.gpa = gpa; }

    public List<Long> getRegisteredCourses() { return registeredCourses; }
    public void setRegisteredCourses(List<Long> registeredCourses) { this.registeredCourses = registeredCourses; }
}
