// ResultController.java
package com.example.UCMS.controller;

import com.example.UCMS.model.Result;
import com.example.UCMS.repository.ResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")   // better to keep consistent with /api prefix
public class ResultController {

    private final ResultRepository resultRepository;

    public ResultController(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    // ✅ Get all results
    @GetMapping
    public ResponseEntity<List<Result>> getAllResults() {
        return ResponseEntity.ok(resultRepository.findAll());
    }

    // ✅ Create a new result
    @PostMapping
    public ResponseEntity<Result> createResult(@RequestBody Result result) {
        return ResponseEntity.ok(resultRepository.save(result));
    }

    // ✅ Get result by ID
    @GetMapping("/{id}")
    public ResponseEntity<Result> getResultById(@PathVariable Long id) {
        return resultRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Update a result by ID
    @PutMapping("/{id}")
    public ResponseEntity<Result> updateResult(@PathVariable Long id, @RequestBody Result resultDetails) {
        return resultRepository.findById(id).map(result -> {
            result.setStudentId(resultDetails.getStudentId());
            result.setStudentName(resultDetails.getStudentName());
            result.setCourseCode(resultDetails.getCourseCode());
            result.setCourseTitle(resultDetails.getCourseTitle());
            result.setGrade(resultDetails.getGrade());
            result.setPoints(resultDetails.getPoints());
            result.setSemester(resultDetails.getSemester());
            return ResponseEntity.ok(resultRepository.save(result));
        }).orElse(ResponseEntity.notFound().build());
    }

    // ✅ Delete a result by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResult(@PathVariable Long id) {
        if (!resultRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        resultRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
