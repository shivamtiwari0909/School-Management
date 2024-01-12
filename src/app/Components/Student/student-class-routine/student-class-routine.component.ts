import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllClassRoutine, StudentClassRoutine } from 'src/app/Models/Student/student-class-routine';
import { StudentClassRoutineService } from 'src/app/service/Student/student-class-routine.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-class-routine',
  templateUrl: './student-class-routine.component.html',
  styleUrls: ['./student-class-routine.component.css']
})

export class StudentClassRoutineComponent {
  classname: string | null = localStorage.getItem("ClassName");
  
  constructor(
    private studentClassRoutineService: StudentClassRoutineService,
    private router: Router,
    private toastr: ToastrService
  ) {
    if (this.classname) {
      this.classname = this.classname.toString();
    } else {
      console.error("ClassName not found in local storage");
    }
  }

  ClassRoutine: StudentClassRoutine | null = null;
  AllClassRout:AllClassRoutine={
    Status:0,
    Message:'',
    AllClassRoutine:[]
  }

  ngOnInit(): void {
    this.studentClassRoutineService.GetClassRoutine().subscribe({
      next: (ClassRoutin) => {
        this.AllClassRout = ClassRoutin;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
