package com.devmountain.Student.Management.System.dtos;

import com.devmountain.Student.Management.System.entities.Course;
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
public class CourseDto implements Serializable {
    private Long course_id;
    private String course_name;
    private String instructor;
    private Date start_date;
    private Date end_date;
    private Set<CourseDto> courseDtoSet = new HashSet<>();

    public CourseDto(Course course) {
        if (course.getCourse_id() != null) {
            this.course_id = course.getCourse_id();
        }
        if (course.getCourse_name() != null) {
            this.course_name = course.getCourse_name();
        }
        if (course.getInstructor() != null) {
            this.instructor = course.getInstructor();
        }
        if (course.getStart_date() != null) {
            this.start_date = course.getStart_date();
        }
        if (course.getEnd_date() != null) {
            this.end_date = course.getEnd_date();
        }
    }
}
