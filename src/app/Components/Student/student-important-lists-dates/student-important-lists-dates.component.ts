import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentImportantListsDatesService } from 'src/app/service/Student/student-important-lists-dates.service';
import { AllImportantListsDates } from 'src/app/Models/Student/student-important-lists-dates';

@Component({
  selector: 'app-student-important-lists-dates',
  templateUrl: './student-important-lists-dates.component.html',
  styleUrls: ['./student-important-lists-dates.component.css']
})
export class StudentImportantListsDatesComponent {
  AllImportantLists: AllImportantListsDates = {
    Status: 0,
    Message: '',
    AllImportantListsDates: [],
  };
  constructor(
    private studentImportantListsDatesService: StudentImportantListsDatesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.studentImportantListsDatesService.GetImportantListsDates().subscribe({
      next: (AllImportant) => {
        this.AllImportantLists = AllImportant;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
}
