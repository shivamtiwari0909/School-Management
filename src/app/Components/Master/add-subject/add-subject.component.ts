import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllSubjects, Subject } from 'src/app/Models/Master/subject';
import { SubjectService } from 'src/app/service/subject.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css'],
})
export class AddSubjectComponent {
  AllSub: AllSubjects | null = null;
  Subject: Subject = {
    SubjectName: '',
    SubjectCode: '',
    SequenceNo: 0,
    SubjectType: 'Primary',
    SubjectID: 0,
    CreatedBy: '',
    Status: 0,
    Message: '',
    isPrimaryChecked:false,
    isOptionalChecked:false,
  };

  ngOnInit(): void {
    this.subjectService.getallSubject().subscribe({
      next: (AllSubject) => {
        this.AllSub = AllSubject;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  constructor(
    private subjectService: SubjectService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ClearData() {
    this.Subject.SubjectID=0;
    this.Subject.SubjectName = '';
    this.Subject.SubjectCode = '';
    this.Subject.SequenceNo = 0;
    this.Subject.SubjectType = 'Primary';
  }

  addSubject() {
    if (!this.Subject.SubjectName) {
      this.toastr.error('Please enter Subject Name !');
      return;
    } else if (!this.Subject.SubjectCode) {
      this.toastr.error('Please enter Subject Code !');
      return;
    } else if (!this.Subject.SequenceNo) {
      this.toastr.error('Please enter Sequence No !');
      return;
    } else {
      
      this.subjectService.addSubject(this.Subject).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ClearData();
            this.subjectService.getallSubject().subscribe({
              next: (AllSubject) => {
                this.AllSub = AllSubject;
              },
              error: (response) => {
                alert(response);
              },
            });
          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }

  DeleteSubject(ID: any) {
    if (confirm('Are you sure wnat to delete ?')) {
      this.subjectService.deleteSubject(ID).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.subjectService.getallSubject().subscribe({
              next: (AllSubject) => {
                this.AllSub = AllSubject;
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

  EditSubject(ID: any) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.subjectService.editHotelRoomName(ID).subscribe({
      next: (response) => {
        this.Subject = response;
      },
    });
  }
}
