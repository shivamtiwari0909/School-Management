import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllApplyLeave, StudentApplyLeave } from 'src/app/Models/Student/student-apply-leave';
import { StudentApplyLeaveService } from 'src/app/service/Student/student-apply-leave.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-apply-leave',
  templateUrl: './student-apply-leave.component.html',
  styleUrls: ['./student-apply-leave.component.css']
})
export class StudentApplyLeaveComponent {
  constructor(
    private studentApplyLeaveService: StudentApplyLeaveService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  AllApp: AllApplyLeave | null = null;
  ApplyLeave: StudentApplyLeave = {
    LeaveID: 0,
    StudentID: 0,
    Day: 'single',
    FromDate: this.getCurrentDate(),
    ToDate: '',
    Subject: '',
    Reason: '',
    Status: 0,
    Message: '',
    LeaveStatus:false,
    NumberofDays:0,
    AppliedDate:'',
    TeacharName:'',
    Description:''
  };

  ngOnInit(): void {
    this.studentApplyLeaveService.getallStudentApplyLeave().subscribe({
      next: (AllApply) => {
        this.AllApp = AllApply;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  ClearData() {
    this.ApplyLeave.LeaveID=0;
    this.ApplyLeave.StudentID=0;
    this.ApplyLeave.Day = '';
    this.ApplyLeave.FromDate = '';
    this.ApplyLeave.ToDate = '';
    this.ApplyLeave.Subject = '';
    this.ApplyLeave.Reason = '';
    this.ApplyLeave.Status = 0;
    this.ApplyLeave.Message = '';
  }

  addNewLeave() {
    if (!this.ApplyLeave.Subject) {
      this.toastr.error('Please enter subject !');
      return;
    } else if (!this.ApplyLeave.Reason) {
      this.toastr.error('Please enter reason !');
      return;
    } else {
      this.studentApplyLeaveService.addStudentApplyLeave(this.ApplyLeave).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ClearData();

            this.studentApplyLeaveService.getallStudentApplyLeave().subscribe({
              next: (AllApply) => {
                this.AllApp = AllApply;
              },
              error: (response) => {
                alert(response);
              },
            });

          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }

  DeleteLeave(ID: any) {
    if (confirm('Are you sure wnat to delete ?')) {
      this.studentApplyLeaveService.deleteStudentApplyLeave(ID).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.studentApplyLeaveService.getallStudentApplyLeave().subscribe({
              next: (AllApply) => {
                this.AllApp = AllApply;
              },
              error: (response) => {
                alert(response);
              },
            });
          }
        },
      });
    }
  }
}
