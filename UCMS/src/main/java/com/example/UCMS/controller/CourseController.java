package com.example.UCMS.controller;


import com.example.UCMS.model.Course;
import com.example.UCMS.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000") // allow React later
public class CourseController {

    @Autowired
    private CourseRepository repo;

    // GET: fetch all courses
    @GetMapping
    public List<Course> getAllCourses() {
        return repo.findAll();
    }

    // POST: add a new course
    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return repo.save(course);
    }
}
