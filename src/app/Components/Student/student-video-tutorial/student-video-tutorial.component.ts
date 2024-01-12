import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllVideoTutorial } from 'src/app/Models/Student/student-video-tutorial';
import { StudentVideoTutorialService } from 'src/app/service/Student/student-video-tutorial.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-video-tutorial',
  templateUrl: './student-video-tutorial.component.html',
  styleUrls: ['./student-video-tutorial.component.css']
})
export class StudentVideoTutorialComponent {

  constructor(
    private studentVideoTutorialService: StudentVideoTutorialService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  AllVideo:AllVideoTutorial={
    Status:0,
    Message:'',
    AllVideoTutorial:[]
  }
  ngOnInit(): void {
    this.studentVideoTutorialService.GetVideoTutorial().subscribe({
      next: (video) => {
        this.AllVideo = video;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
