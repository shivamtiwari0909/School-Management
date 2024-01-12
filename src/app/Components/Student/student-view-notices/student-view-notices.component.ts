import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentViewNoticesService } from 'src/app/service/Student/student-view-notices.service';
import { AllViewNotices } from 'src/app/Models/Student/student-view-notices';

@Component({
  selector: 'app-student-view-notices',
  templateUrl: './student-view-notices.component.html',
  styleUrls: ['./student-view-notices.component.css']
})
export class StudentViewNoticesComponent {
  AllView:AllViewNotices={
    Status:0,
    Message:'',
    AllViewNotices:[]
  }
  selectedFirstIndex: number = 0;

  constructor(
    private studentViewNoticesService: StudentViewNoticesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.studentViewNoticesService.GetViewMarksheet().subscribe({
      next: (AllVie) => {
        this.AllView = AllVie;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
