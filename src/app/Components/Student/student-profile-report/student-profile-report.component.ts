import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile-report',
  templateUrl: './student-profile-report.component.html',
  styleUrls: ['./student-profile-report.component.css']
})
export class StudentProfileReportComponent {
  username: string | null = localStorage.getItem("UserName");
  fathername: string | null = localStorage.getItem("FatherName");
  
  constructor() {
    if (this.username) {
      this.username = this.username.toString();
    } else {
      console.error("UserName not found in local storage");
    }
    if (this.fathername) {
      this.fathername = this.fathername.toString();
    } else {
      console.error("FatherName not found in local storage");
    }
  }
}
