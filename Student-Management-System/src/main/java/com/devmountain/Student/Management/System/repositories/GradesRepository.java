package com.devmountain.Student.Management.System.repositories;

import com.devmountain.Student.Management.System.entities.Grades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradesRepository extends JpaRepository<Grades, Long> {
}
