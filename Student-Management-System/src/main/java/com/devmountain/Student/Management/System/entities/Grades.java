package com.devmountain.Student.Management.System.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "Grades")
public class Grades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long grades_id;

    @Column
    private Long student_id;

    @Column
    private Long course_id;

    @Column
    private int grade;

    public Long getGrades_id() {
        return grades_id;
    }

    public void setGrades_id(Long grades_id) {
        this.grades_id = grades_id;
    }

    public Long getStudent_id() {
        return student_id;
    }

    public void setStudent_id(Long student_id) {
        this.student_id = student_id;
    }

    public Long getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Long course_id) {
        this.course_id = course_id;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public Grades() {
    }

    public Grades(Long grades_id, Long student_id, Long course_id, int grade) {
        this.grades_id = grades_id;
        this.student_id = student_id;
        this.course_id = course_id;
        this.grade = grade;
    }

    @ManyToOne
    @JsonBackReference
    private Course course;

    @ManyToOne
    @JsonBackReference
    private Student student;
}
