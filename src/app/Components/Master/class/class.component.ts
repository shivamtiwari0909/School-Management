import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { AllClass, AllSection, Class, Section } from 'src/app/Models/Master/class';
import { AllSubjects } from 'src/app/Models/Master/subject';
import { ClassService } from 'src/app/service/Master/class.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AddteacherService } from 'src/app/service/Master/addteacher.service';
import { AllTeacher } from 'src/app/Models/Master/teacher';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  AllSub: AllSubjects = {
    Status: 0,
    Message: '',
    AllSubjects: [],
  };
  Section: Section = {
    SectionID:0,
    ClassID:0,
    Name: '',
    NickName: '',
    Teacher: '0',
    TeacherName:'',
    Status:0,
    Message:''
  };
  AllClass: AllClass | null = null;
  AllTeachers: AllTeacher | null = null;
  AllSection: AllSection | null = null;
  selectedPrimarySubjects: string[] = [];
  selectedOptionalSubjects: string[] = [];
  Class: Class = {
    ClassID: 0,
    ClassName: '',
    ShortName: '',
    PrimarySubject: '',
    OptionalSubject: '',
    Status: 0,
    Message: '',
  };
  constructor(
    private classService: ClassService,
    private allTeacher: AddteacherService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.classService.getallSubject().subscribe({
      next: (AllSubject) => {
        this.AllSub = AllSubject;
      },
      error: (response) => {
        alert(response);
      },
    });
    this.classService.getAllClass().subscribe({
      next: (AllSubject) => {
        this.AllClass = AllSubject;
        console.log(this.AllClass);
      },
      error: (response) => {
        alert(response);
      },
    });
    this.allTeacher.getallTeacher().subscribe({
      next: (AllTeachers) => {
        this.AllTeachers = AllTeachers;
      },
      error: (response) => {
        this.toastr.error(response);
      },
    });
  }

  OptionalSubject(event: any) {
    const ID = event.target.value;
    if (this.selectedOptionalSubjects.includes(ID)) {
      this.selectedOptionalSubjects = this.selectedOptionalSubjects.filter(
        (existingItem) => existingItem !== ID
      );
    } else {
      this.selectedOptionalSubjects.push(ID);
    }
  }

  PrimarySubject(event: any) {
    const ID = event.target.value;
    if (this.selectedPrimarySubjects.includes(ID)) {
      this.selectedPrimarySubjects = this.selectedPrimarySubjects.filter(
        (existingItem) => existingItem !== ID
      );
    } else {
      this.selectedPrimarySubjects.push(ID);
    }
  }

  PrimaryAsString(): string {
    return this.selectedPrimarySubjects.join(', ');
  }

  OptionalAsString(): string {
    return this.selectedOptionalSubjects.join(', ');
  }

  ClearData() {
    (this.Class.OptionalSubject = ''),
      (this.Class.PrimarySubject = ''),
      (this.Class.ClassID = 0),
      (this.Class.ClassName = ''),
      (this.Class.ShortName = '');
    this.AllSub.AllSubjects.forEach((subject) => {
      subject.isPrimaryChecked = false;
    });
    this.AllSub.AllSubjects.forEach((subject) => {
      subject.isOptionalChecked = false;
    });
  }

  addClass() {
    if (!this.Class.ClassName) {
      this.toastr.error('Please enter Class Name !');
      return;
    } else if (!this.Class.ShortName) {
      this.toastr.error('Please enter Short Name !');
      return;
    } else if (!this.PrimarySubject) {
      this.toastr.error('Please select Primary Subject !');
      return;
    } else {
      this.Class.PrimarySubject = this.PrimaryAsString();
      this.Class.OptionalSubject = this.OptionalAsString();

      this.classService.addClass(this.Class).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ClearData();
            this.classService.getAllClass().subscribe({
              next: (AllSubject) => {
                this.AllClass = AllSubject;
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

  EditClass(ID: any) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.classService.editClass(ID).subscribe({
      next: (response) => {
        this.Class = response;
        let PrimarySubject = this.Class.PrimarySubject
          ? this.Class.PrimarySubject.split(',').map(Number)
          : [];
        let OptionalSubject = this.Class.OptionalSubject
          ? this.Class.OptionalSubject.split(',').map(Number)
          : [];
        this.selectedPrimarySubjects = PrimarySubject.map(String);
        this.selectedOptionalSubjects = OptionalSubject.map(String);
        this.AllSub.AllSubjects.forEach((subject) => {
          for (let i = 0; i < OptionalSubject.length; i++) {
            subject.isOptionalChecked = OptionalSubject.some(
              (id) => id.toString() === subject.SubjectID.toString()
            );
          }
        });
        this.AllSub.AllSubjects.forEach((subject) => {
          for (let i = 0; i < PrimarySubject.length; i++) {
            subject.isPrimaryChecked = PrimarySubject.some(
              (id) => id.toString() === subject.SubjectID.toString()
            );
          }
        });
      },
    });
  }

  DeleteClass(ID: any) {
    if (confirm('Are you sure wnat to delete ?')) {
      this.classService.deleteClass(ID).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.classService.getAllClass().subscribe({
              next: (AllSubject) => {
                this.AllClass = AllSubject;
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

  OpenModal(ID: any) {
    const modelDiv = document.getElementById('staticBackdrop');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
      this.Section.ClassID = ID;
      this.classService.getAllSection(ID).subscribe({
        next: (AllSection) => {
          this.AllSection = AllSection;
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }
  CloseModal() {
    const modelDiv = document.getElementById('staticBackdrop');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
      this.Section.ClassID = 0;
      this.AllSection=null;
    }
  }

  GetTeacher(event:any){
    this.Section.Teacher=event.target.value;
  }

  addSection() {
    if (!this.Section.Name) {
      this.toastr.error('Please enter Name !');
      return;
    } else if (!this.Section.NickName) {
      this.toastr.error('Please enter Nick Name !');
      return;
    } else if (this.Section.Teacher=='0') {
      this.toastr.error('Please select Teacher !');
      return;
    } else {
      this.classService.addSection(this.Section).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            (this.Section.SectionID = 0),
            (this.Section.Name = ''),
            (this.Section.NickName = ''),
            (this.Section.Teacher = '0'),
            this.classService.getAllSection(this.Section.ClassID).subscribe({
              next: (AllSection) => {
                this.AllSection = AllSection;
              },
              error: (response) => {
                this.toastr.error(response);
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

  EditSection(ID:any){
    this.classService.editSection(ID).subscribe({
      next: (response) => {
        this.Section = response;
      },
    });
  }
  DeleteSection(ID:any){
    if (confirm('Are you sure wnat to delete ?')) {
      this.classService.deleteSection(ID).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.classService.getAllSection(this.Section.ClassID).subscribe({
              next: (AllSection) => {
                this.AllSection = AllSection;
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
