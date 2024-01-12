import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentChangePassword } from 'src/app/Models/Student/student-change-password';
import { StudentChangepasswordService } from 'src/app/service/Student/student-changepassword.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent {
  ChangePass: StudentChangePassword = {
    Old: '',
    New: '',
    Confirm: '',
    Status:0,
    Message:''
  };

  constructor(
    private changepasswordService:StudentChangepasswordService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  changePassword(){
    console.log(this.ChangePass);
    if (!this.ChangePass.Old) {
      this.toastr.error('Please enter Old Password !');
      return;
    } else if (!this.ChangePass.New) {
      this.toastr.error('Please enter New Password !');
      return;
    } else if (!this.ChangePass.Confirm) {
      this.toastr.error('Please enter Confirm Password !');
      return;
    } 
    else if(this.ChangePass.New!=this.ChangePass.Confirm){
      this.toastr.error('Please enter Confirm Password same as New Password !');
      return;
    }
    else {
      this.changepasswordService.changePassword(this.ChangePass).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ChangePass.Old = '';
            this.ChangePass.New = '';
            this.ChangePass.Confirm = '';
              //this.ClearData();
          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }
}
