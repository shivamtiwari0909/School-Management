import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllViewCurriculum } from 'src/app/Models/Student/student-view-curriculum';
import { StudentViewCurriculumService } from 'src/app/service/Student/student-view-curriculum.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-view-curriculum',
  templateUrl: './student-view-curriculum.component.html',
  styleUrls: ['./student-view-curriculum.component.css']
})
export class StudentViewCurriculumComponent {
  constructor(
    private studentViewCurriculumService: StudentViewCurriculumService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  AllView:AllViewCurriculum={
    Status:0,
    Message:'',
    AllViewCurriculum:[]
  }
  ngOnInit(): void {
    this.studentViewCurriculumService.GetViewCurriculum().subscribe({
      next: (view) => {
        this.AllView = view;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
