import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Master/login';
import { LoginService } from 'src/app/service/Master/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  getlogIn: Login = {
    UserName: '',
    Password: '',
    Status: 0,
    Message: '',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {
    localStorage.setItem('IsLogin', 'false');
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
          localStorage.setItem('IsLogin', 'false');
          this.toastr.error(res.Message);
        } else {
          localStorage.setItem('IsLogin', 'true');
          this.router.navigateByUrl('dashboard');
        }
      },
      error: (response) => {
        this.toastr.error(response);
      },
    });
  }
}
