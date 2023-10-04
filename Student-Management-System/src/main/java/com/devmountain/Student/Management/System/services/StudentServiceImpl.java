package com.devmountain.Student.Management.System.services;

import com.devmountain.Student.Management.System.dtos.StudentDto;
import com.devmountain.Student.Management.System.entities.Student;
import com.devmountain.Student.Management.System.repositories.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentServiceImpl {
    @Autowired
    private StudentRepository studentRepository;

    @Transactional
    public List<String> addStudent(StudentDto studentDto) {
        List<String> response = new ArrayList<>();
        Student student = new Student(studentDto);
        studentRepository.saveAndFlush(student);
        response.add("Student Added Successfully");
        return response;
    }
}
