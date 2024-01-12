import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllTeacherName } from 'src/app/Models/Student/student-subject-teachers';
import { StudentSubjectTeachersService } from 'src/app/service/Student/student-subject-teachers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-subject-teachers',
  templateUrl: './student-subject-teachers.component.html',
  styleUrls: ['./student-subject-teachers.component.css']
})
export class StudentSubjectTeachersComponent {

  constructor(
    private studentSubjectTeachersService: StudentSubjectTeachersService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  AllTeacher:AllTeacherName={
    Status:0,
    Message:'',
    AllTeacherName:[]
  }
  ngOnInit(): void {
    this.studentSubjectTeachersService.GetSubjectTeachers().subscribe({
      next: (Teacher) => {
        this.AllTeacher = Teacher;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
