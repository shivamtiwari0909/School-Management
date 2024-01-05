import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Changepassword } from 'src/app/Models/Master/changepassword';
import { ChangepasswordService } from 'src/app/service/changepassword.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  ChangePass: Changepassword = {
    Old: '',
    New: '',
    Confirm: '',
    Status:0,
    Message:''
  };

  constructor(
    private changepasswordService:ChangepasswordService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // ClearData() {
  //   this.ChangePass.Old = '';
  //   this.ChangePass.New = '';
  //   this.ChangePass.Confirm = '';
  // }

  changePassword(){
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
            // this.ClearData();
          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }
}
