import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentLogin } from 'src/app/Models/Student/student-login';
import { LoginService } from 'src/app/service/Student/login.service';

@Component({
  selector: 'app-student-log-in',
  templateUrl: './student-log-in.component.html',
  styleUrls: ['./student-log-in.component.css']
})
export class StudentLogInComponent {
  getlogIn: StudentLogin = {
    UserName: '',
    Password: '',
    Status: 0,
    Message: '',
    StudentID:0,
    ClassName:'',
    FatherName:'',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    localStorage.setItem('StudentIsLogin', 'false');
  }
  
  logIn() {
    if (!this.getlogIn.UserName) {
      this.toastr.error('Please enter User name.');
      return;
    } else if (!this.getlogIn.Password) {
      this.toastr.error('Please enter Password !');
      return;
    }
    this.loginService.getLogIn(this.getlogIn).subscribe({
      next: (res) => {
        if (res.Status == 0) {
          localStorage.setItem('StudentIsLogin', 'false');
          this.toastr.error(res.Message);
        } else {
          localStorage.setItem('StudentIsLogin', 'true');
          localStorage.setItem('StudentID', res.StudentID.toString());
          localStorage.setItem('UserName', res.UserName.toString());
          localStorage.setItem('ClassName', res.ClassName.toString());
          localStorage.setItem('FatherName', res.FatherName.toString());
          this.router.navigateByUrl('student-dashboard');
        }
      },
      error: (response) => {
        this.toastr.error(response);
      },
    });
  }
}
