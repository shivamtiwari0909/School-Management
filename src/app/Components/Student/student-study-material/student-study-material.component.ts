import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentStudyMaterialService } from 'src/app/service/Student/student-study-material.service';
import { AllStudyMaterial } from 'src/app/Models/Student/student-study-material';

@Component({
  selector: 'app-student-study-material',
  templateUrl: './student-study-material.component.html',
  styleUrls: ['./student-study-material.component.css']
})
export class StudentStudyMaterialComponent {
  classname: string | null = localStorage.getItem("ClassName");
  AllStudyMat:AllStudyMaterial={
    Status:0,
    Message:'',
    AllStudyMaterial:[]
  }

  constructor(
    private studentStudyMaterialService: StudentStudyMaterialService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    if (this.classname) {
      this.classname = this.classname.toString();
    } else {
      console.error("ClassName not found in local storage");
    }
  }

  ngOnInit(): void {
    this.studentStudyMaterialService.GetStudyMaterial().subscribe({
      next: (AllStudy) => {
        this.AllStudyMat = AllStudy;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
