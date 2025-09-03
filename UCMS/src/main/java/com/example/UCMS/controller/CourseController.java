package com.example.UCMS.controller;

import com.example.UCMS.model.Course;
import com.example.UCMS.repository.CourseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable Long id) {
        return courseRepository.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    public Course updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Course course = courseRepository.findById(id).orElseThrow();
        course.setTitle(courseDetails.getTitle());
        course.setInstructor(courseDetails.getInstructor());
        course.setCredits(courseDetails.getCredits());
        course.setCapacity(courseDetails.getCapacity());
        course.setEnrolled(courseDetails.getEnrolled());
        course.setSemester(courseDetails.getSemester());
        course.setSchedule(courseDetails.getSchedule());
        course.setLocation(courseDetails.getLocation());
        course.setDepartment(courseDetails.getDepartment());
        return courseRepository.save(course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable Long id) {
        courseRepository.deleteById(id);
    }
}
