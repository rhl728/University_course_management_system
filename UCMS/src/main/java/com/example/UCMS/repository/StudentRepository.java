// StudentRepository.java
package com.example.UCMS.repository;

import com.example.UCMS.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;




public interface StudentRepository extends JpaRepository<Student, Long> {
}
