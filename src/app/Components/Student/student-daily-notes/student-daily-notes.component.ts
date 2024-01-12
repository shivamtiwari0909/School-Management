import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentDailyNotesService } from 'src/app/service/Student/student-daily-notes.service';
import { AllClass, AllSection, StudentDailyNotes } from 'src/app/Models/Student/student-daily-notes';
import { StudentSubjectTeachersService } from 'src/app/service/Student/student-subject-teachers.service';
import { AllTeacherName } from 'src/app/Models/Student/student-subject-teachers';

@Component({
  selector: 'app-student-daily-notes',
  templateUrl: './student-daily-notes.component.html',
  styleUrls: ['./student-daily-notes.component.css']
})
export class StudentDailyNotesComponent {
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
  selectedFirstIndex: number = 0;

  constructor(
    private studentDailyNotesService: StudentDailyNotesService,
    private studentSubjectTeachersService: StudentSubjectTeachersService,
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
