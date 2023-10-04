package com.devmountain.Student.Management.System.dtos;

import com.devmountain.Student.Management.System.entities.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentDto implements Serializable {
    private Long student_id;
    private String first_name;
    private String last_name;
    private Date date_of_birth;
    private Set<StudentDto> studentDtoSet = new HashSet<>();

    public StudentDto(Student student) {
        if (student.getStudent_id() != null) {
            this.student_id = student.getStudent_id();
        }
        if (student.getFirst_name() != null) {
            this.first_name = student.getFirst_name();
        }
        if (student.getLast_name() != null) {
            this.last_name = student.getLast_name();
        }
        if (student.getDate_of_birth() != null) {
            this.date_of_birth = student.getDate_of_birth();
        }
    }
}
