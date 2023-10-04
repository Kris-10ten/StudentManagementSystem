package com.devmountain.Student.Management.System.services;

import com.devmountain.Student.Management.System.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl {
    @Autowired
    private CourseRepository courseRepository;
}
