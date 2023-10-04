package com.devmountain.Student.Management.System.repositories;

import com.devmountain.Student.Management.System.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByFirst_Name(String first_name);
}
