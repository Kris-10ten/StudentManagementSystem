package com.devmountain.Student.Management.System.services;

import com.devmountain.Student.Management.System.repositories.GradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradesServiceImpl {
    @Autowired
    private GradesRepository gradesRepository;
}
