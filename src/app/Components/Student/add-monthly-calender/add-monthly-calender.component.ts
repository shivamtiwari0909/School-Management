import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { AllMonthlyCalender, GetAllEventType, StudentMonthlyCalender, StudentEventType, StudentCalender } from 'src/app/Models/Student/student-monthly-calender';
import { INITIAL_EVENTS, createEventId, StudentMonthlyCalenderService } from 'src/app/service/Student/student-monthly-calender.service';

@Component({
  selector: 'app-add-monthly-calender',
  templateUrl: './add-monthly-calender.component.html',
  styleUrl: './add-monthly-calender.component.css'
})
export class AddMonthlyCalenderComponent {
  constructor(
    private studentMonthlyCalenderService: StudentMonthlyCalenderService,
    private router: Router,
    private toastr: ToastrService,
    private httpClient: HttpClient
  ) { }

  AllEventType: GetAllEventType = {
    Status: 0,
    Message: '',
    GetAllEventType: [],
  };

  ngOnInit(): void {
    this.studentMonthlyCalenderService.getAllEventType().subscribe({
      next: (AllEvent) => {
        this.AllEventType = AllEvent;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  AllMonthly: AllMonthlyCalender | null = null;
  Monthlycal: StudentMonthlyCalender = {
    UserID: 0,
    EventTypeID: 0,
    EventID: 0,
    EventName: '',
    StartDate: this.getCurrentDate(),
    EndDate: this.getCurrentDate(),
    StartTime: '',
    EndTime: '',
    Description: '',
    Status: 0,
    Message: ''
  };

  ClearData() {
    this.Monthlycal.UserID = 0;
    this.Monthlycal.EventID = 0;
    this.Monthlycal.EventTypeID = 0;
    this.Monthlycal.EventName = '';
    this.Monthlycal.StartDate = this.getCurrentDate();
    this.Monthlycal.EndDate = this.getCurrentDate();
    this.Monthlycal.StartTime = '';
    this.Monthlycal.EndTime = '';
    this.Monthlycal.Description = '';
  }

  addNewEvent() {
    if (!this.Monthlycal.EventTypeID) {
      this.toastr.error('Please select event type !');
      return;
    } else if (!this.Monthlycal.EventName) {
      this.toastr.error('Please enter title !');
      return;
    } else if (!this.Monthlycal.StartDate) {
      this.toastr.error('Please enter start date !');
      return;
    } else if (!this.Monthlycal.EndDate) {
      this.toastr.error('Please enter end date !');
      return;
    } else {
      this.studentMonthlyCalenderService.addStudentMonthlyCalender(this.Monthlycal).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ClearData();
          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }
}
