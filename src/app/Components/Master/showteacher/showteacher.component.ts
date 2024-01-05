import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllTeacher } from 'src/app/Models/Master/teacher';
import { AddteacherService } from 'src/app/service/addteacher.service';

@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.component.html',
  styleUrls: ['./showteacher.component.css'],
})
export class ShowteacherComponent {
  AllTeach: AllTeacher | null = null;
  constructor(
    private addteacher: AddteacherService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.addteacher.getallTeacher().subscribe({
      next: (AllTeacher) => {
        this.AllTeach = AllTeacher;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  EditSubject(ID: any) {
    sessionStorage.setItem("TeacherID", JSON.stringify(ID));
    this.router.navigateByUrl('add-teacher');
  }
  DeleteSubject(ID: any) {
    if (confirm('Are you sure wnat to delete ?')) {
      this.addteacher.deleteTeacher(ID).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toaster.error(res.Message);
          } else {
            this.toaster.success(res.Message);
            this.addteacher.getallTeacher().subscribe({
              next: (AllTeacher) => {
                this.AllTeach = AllTeacher;
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
