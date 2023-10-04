document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const studentList = document.querySelector('#students');
  const searchInput = document.querySelector('#search-input');
  const studentInfo = document.querySelector('#student-info');
  const coursesTable = document.querySelector('#courses-table tbody');
  const courseForm = document.querySelector('#course-form');

  let students = [];

  form.addEventListener('submit', function(event) {
  event.preventDefault();

  const studentId = document.querySelector('#student-id').value;
  const firstName = document.querySelector('#student-first-name').value;
  const lastName = document.querySelector('#student-last-name').value;
  const dateOfBirth = document.querySelector('#student-date-of-birth').value;

  if (studentId) {
  // Edit existing student
  const student = students.find(student => student.id === parseInt(studentId));
  if (student) {
  student.firstName = firstName;
  student.lastName = lastName;
  student.dateOfBirth = dateOfBirth;
  }
  } else {
  // Add new student
  const student = {
  id: Date.now(),
  firstName,
  lastName,
  dateOfBirth,
  courses: [],
  };
  students.push(student);
  }

  renderStudents(students);
  clearForm();
  });

  searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredStudents = students.filter(function(student) {
  const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
  return fullName.includes(searchTerm) || student.dateOfBirth.includes(searchTerm);
  });
  renderStudents(filteredStudents);
  });

  studentList.addEventListener('click', function(event) {
  const studentId = event.target.dataset.id;
  if (studentId) {
  const student = students.find(student => student.id === parseInt(studentId));
  if (student) {
  renderStudentDetails(student);
  }
  }
  });

  courseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const studentId = document.querySelector('#student-id').value;
  const courseName = document.querySelector('#course-name').value;
  const instructor = document.querySelector('#instructor').value;
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;
  const grade = document.querySelector('#grade').value;

  if (studentId && courseName && instructor && startDate && endDate && grade) {
  const student = students.find(student => student.id === parseInt(studentId));
  if (student) {
  const course = {
  id: Date.now(),
  courseName,
  instructor,
  startDate,
  endDate,
  grade,
  };
  student.courses.push(course);
  renderStudentDetails(student);
  clearCourseForm();
  }
  }
  });

  function addStudentToList(student) {
  const li = document.createElement('li');
  li.textContent = `${student.firstName} ${student.lastName}`;
  li.setAttribute('data-id', student.id);
  studentList.appendChild(li);
  }

  function renderStudents(students) {
  studentList.innerHTML = '';
  students.forEach(function(student) {
  addStudentToList(student);
  });
  }

  function renderStudentDetails(student) {
  document.querySelector('#student-id').value = student.id;
  document.querySelector('#student-first-name').value = student.firstName;
  document.querySelector('#student-last-name').value = student.lastName;
  document.querySelector('#student-date-of-birth').value = student.dateOfBirth;

  studentInfo.innerHTML = `
  <p>Name: ${student.firstName} ${student.lastName}</p>
  <p>Date of Birth: ${student.dateOfBirth}</p>
  `;
  renderCoursesTable(student.courses);
  }

  function renderCoursesTable(courses) {
  coursesTable.innerHTML = '';
  courses.forEach(function(course) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <td>${course.courseName}</td>
  <td>${course.instructor}</td>
  <td>${course.startDate}</td>
  <td>${course.endDate}</td>
  <td>${course.grade}</td>
  <td>
  <button data-id="${course.id}" data-action="edit">Edit</button>
  <button data-id="${course.id}" data-action="delete">Delete</button>
  </td>
  `;
  coursesTable.appendChild(tr);
  });
  }

  function clearForm() {
  document.querySelector('#student-id').value = '';
  document.querySelector('#student-first-name').value = '';
  document.querySelector('#student-last-name').value = '';
  document.querySelector('#student-date-of-birth').value = '';
  }

  function clearCourseForm() {
  document.querySelector('#course-name').value = '';
  document.querySelector('#instructor').value = '';
  document.querySelector('#start-date').value = '';
  document.querySelector('#end-date').value = '';
  document.querySelector('#grade').value = '';
  }
  });

  coursesTable.addEventListener('click', function(event) {
    const courseId = event.target.dataset.id;
    const action = event.target.dataset.action;
    if (courseId && action === 'edit') {
      const studentId = document.querySelector('#student-id').value;
      const student = students.find(student => student.id === parseInt(studentId));
      if (student) {
        const course = student.courses.find(course => course.id === parseInt(courseId));
        if (course) {
          // Populate the form with the course details
          document.querySelector('#course-name').value = course.courseName;
          document.querySelector('#instructor').value = course.instructor;
          document.querySelector('#start-date').value = course.startDate;
          document.querySelector('#end-date').value = course.endDate;
          document.querySelector('#grade').value = course.grade;
        }
      }
    }
  });

  coursesTable.addEventListener('click', function(event) {
    const courseId = event.target.dataset.id;
    const action = event.target.dataset.action;
    if (courseId && action === 'delete') {
      const studentId = document.querySelector('#student-id').value;
      const student = students.find(student => student.id === parseInt(studentId));
      if (student) {
        const courseIndex = student.courses.findIndex(course => course.id === parseInt(courseId));
        if (courseIndex !== -1) {
          // Remove the course from the student's courses array
          student.courses.splice(courseIndex, 1);
          // Render the updated student details and courses table
          renderStudentDetails(student);
        }
      }
    }
  });



//  coursesTable.addEventListener('click', function(event) {
//    const courseId = event.target.dataset.id;
//    const action = event.target.dataset.action;
//    if (courseId && action) {
//      const studentId = document.querySelector('#student-id').value;
//      const student = students.find(student => student.id === parseInt(studentId));
//      if (student) {
//        const courseIndex = student.courses.findIndex(course => course.id === parseInt(courseId));
//        if (courseIndex !== -1) {
//          if (action === 'edit') {
//            // Edit course
//            // Update the course details
//            student.courses[courseIndex].courseName = document.querySelector('#course-name').value;
//            student.courses[courseIndex].instructor = document.querySelector('#instructor').value;
//            student.courses[courseIndex].startDate = document.querySelector('#start-date').value;
//            student.courses[courseIndex].endDate = document.querySelector('#end-date').value;
//            student.courses[courseIndex].grade = document.querySelector('#grade').value;
//          } else if (action === 'delete') {
//            // Delete course
//            student.courses.splice(courseIndex, 1);
//          }
//          renderStudentDetails(student);
//        }
//      }
//    }
//  });

