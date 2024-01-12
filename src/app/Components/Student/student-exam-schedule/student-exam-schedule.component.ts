import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllExam, AllExamSchedule } from 'src/app/Models/Student/student-exam-schedule';
import { StudentExamScheduleService } from 'src/app/service/Student/student-exam-schedule.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-exam-schedule',
  templateUrl: './student-exam-schedule.component.html',
  styleUrls: ['./student-exam-schedule.component.css']
})
export class StudentExamScheduleComponent {
  constructor(
    private studentExamScheduleService: StudentExamScheduleService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  AllExa:AllExam={
    Status:0,
    Message:'',
    AllExam:[]
  }
  AllExams:AllExamSchedule={
    Status:0,
    Message:'',
    AllExamSchedule:[]
  }
  ngOnInit(): void {
    this.studentExamScheduleService.GetExam().subscribe({
      next: (Exam) => {
        this.AllExa = Exam;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
  GetExamSchedule(ID: any) {
    this.studentExamScheduleService.GetExamSchedule(ID).subscribe({
      next: (response) => {
        this.AllExams = response;
      },
    });
  }
}
