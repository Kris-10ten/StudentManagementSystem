package com.devmountain.Student.Management.System.dtos;

import com.devmountain.Student.Management.System.entities.Grades;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GradesDto implements Serializable {
    private Long grades_id;
    private StudentDto studentDto;
    private CourseDto courseDto;
    private int grade;
    private Set<GradesDto> gradesDtoSet = new HashSet<>();


    public GradesDto(Grades grades) {
        if (grades.getGrades_id() != null) {
            this.grades_id = grades.getGrades_id();
        }
            this.grade = grades.getGrade();
    }
}
