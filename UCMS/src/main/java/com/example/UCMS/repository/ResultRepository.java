// ResultRepository.java
package com.example.UCMS.repository;

import com.example.UCMS.model.Result;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepository extends JpaRepository<Result, Long> {
}
