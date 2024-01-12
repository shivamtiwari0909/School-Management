import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentDailyNotesService } from 'src/app/service/Student/student-daily-notes.service';
import { AllClass, AllSection, StudentDailyNotes } from 'src/app/Models/Student/student-daily-notes';
import { AllTeacherName } from 'src/app/Models/Student/student-subject-teachers';
import { StudentHomeWorkService } from 'src/app/service/Student/student-home-work.service';
import { AllHomeWork } from 'src/app/Models/Student/student-home-work';
import { StudentSubjectTeachersService } from 'src/app/service/Student/student-subject-teachers.service';

@Component({
  selector: 'app-student-home-work',
  templateUrl: './student-home-work.component.html',
  styleUrls: ['./student-home-work.component.css']
})
export class StudentHomeWorkComponent {
  AllCla: AllClass = {
    Status: 0,
    Message: '',
    AllClass: [],
  };
  AllSect: AllSection = {
    Status: 0,
    Message: '',
    AllSection: [],
  };
  AllTeacher:AllTeacherName={
    Status:0,
    Message:'',
    AllTeacherName:[]
  }
  AllHome:AllHomeWork={
    Status:0,
    Message:'',
    AllHomeWork:[]
  }
  selectedFirstIndex: number = 0;

  constructor(
    private studentDailyNotesService: StudentDailyNotesService,
    private studentSubjectTeachersService: StudentSubjectTeachersService,
    private studentHomeWorkService: StudentHomeWorkService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.updateSecondDropdownOptions();
  }

  ngOnInit(): void {
    this.studentDailyNotesService.getAllClass().subscribe({
      next: (AllClas) => {
        this.AllCla = AllClas;
      },
      error: (response) => {
        alert(response);
      },
    });
    this.studentSubjectTeachersService.GetSubjectTeachers().subscribe({
      next: (Teacher) => {
        this.AllTeacher = Teacher;
      },
      error: (response) => {
        alert(response);
      },
    });
    this.studentHomeWorkService.GetHomeWork().subscribe({
      next: (AllHom) => {
        this.AllHome = AllHom;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  updateSecondDropdownOptions() {
    this.getOptionsForSelectedIndex(this.selectedFirstIndex);
  }
  getOptionsForSelectedIndex(ID: any) {
    this.studentDailyNotesService.getAllSection(ID).subscribe({
      next: (AllSecti) => {
        this.AllSect = AllSecti;
      },
    });
  }  
}
