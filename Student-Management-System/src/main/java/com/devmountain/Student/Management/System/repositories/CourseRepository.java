package com.devmountain.Student.Management.System.repositories;

import com.devmountain.Student.Management.System.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
