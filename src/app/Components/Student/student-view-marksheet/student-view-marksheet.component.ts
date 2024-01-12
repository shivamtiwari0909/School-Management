import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllExam, AllExamSchedule } from 'src/app/Models/Student/student-exam-schedule';
import { StudentExamScheduleService } from 'src/app/service/Student/student-exam-schedule.service';
import { StudentViewMarksheetService } from 'src/app/service/Student/student-view-marksheet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-view-marksheet',
  templateUrl: './student-view-marksheet.component.html',
  styleUrls: ['./student-view-marksheet.component.css']
})
export class StudentViewMarksheetComponent {
  constructor(
    private studentExamScheduleService: StudentExamScheduleService,
    private studentViewMarksheetService: StudentViewMarksheetService,
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
    this.studentViewMarksheetService.GetViewMarksheet().subscribe({
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
