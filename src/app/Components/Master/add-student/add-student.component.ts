import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllClass, AllSection } from 'src/app/Models/Master/class';
import { Student } from 'src/app/Models/Master/student';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
declare var bootstrap: any;
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  constructor(
    private toaster: ToastrService,
    private classService: ClassService,
    private student: StudentService
  ) {}

  Student: Student = {
    StudentID:0,
    AcademicYear: '',
    RegNo: '',
    AdmissionNo: '',
    DateOfAddmission: '',
    StudentName: '',
    UserName: '',
    Password: '',
    StudentEmail: '',
    CurrentClass: '',
    Section: '',
    MobileNo: '',
    DateOfBirth: '',
    RollNo: '',
    BloodGroup: '',
    Gender: '',
    StudentAdharNo: '',
    StudentPhoto: null,
    MotherName: '',
    MotherQualification: '',
    MotherContactNo: '',
    FatherName: '',
    FatherQualification: '',
    FatherEmail: '',
    FatherContactNo: '',
    YearlyIncome: '',
    MotherToung: '',
    PermanentAddress: '',
    LocalAddress: '',
    Village: '',
    Post: '',
    PoliceStation: '',
    PinCode: '',
    City: '',
    State: '',
    Country: '',
    Religion: '',
    Category: '',
    MedicalHistory: '',
    Cast: '',
    LastInstituteName: '',
    LastClassAttended: '',
    ResultOfLastClass: '',
    LastInstituteAffiliatedTo: '',
    TransferCertificateNo: '',
    TransfeCertificateDate: '',
    StudentBankAccountNo: '',
    BankIFSC: '',
    MonthlyFeesDiscountAmount: '',
    GovermentIDName: '',
    AdharCardPhoto: null,
    BirthCertificatePhoto: null,
    TransferCertificatePhoto: null,
    LastClassMarkSheetPhoto: null,
  };
  AllClass: AllClass | null = null;
  AllSection: AllSection | null = null;
  ID: string = '0';
  Status: Number=0;
  selectedGender: string = 'Male'; // Default value
  genders = ['Male', 'Female'];
  ngOnInit(): void {
    this.classService.getAllClass().subscribe({
      next: (AllSubject) => {
        this.AllClass = AllSubject;
      },
      error: (response) => {
        alert(response);
      },
    });
  }
  ngAfterViewInit(): void {
    // Enable Tooltips
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl: Element) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  onNextClick(Tab:number): void {
    this.Status=0;
    if(Tab==1)
    {
      if(this.Student.AcademicYear=="")
      {
        this.toaster.error("Please Select Academic Year !");
        this.Status=1;
      }
      else if(this.Student.DateOfAddmission=="")
      {
        this.toaster.error("Please Select Date of Admission !");
        this.Status=1;
      }
      else if(this.Student.StudentName=="")
      {
        this.toaster.error("Please Enter Student Name !");
        this.Status=1;
      }
      else if(this.Student.UserName=="")
      {
        this.toaster.error("Please Enter User Name !");
        this.Status=1;
      }
      else if(this.Student.Password=="")
      {
        this.toaster.error("Please Enter Password !");
        this.Status=1;
      }
      else if(this.Student.CurrentClass=="")
      {
        this.toaster.error("Please Select Current Class !");
        this.Status=1;
      }
      else if(this.Student.Section=="")
      {
        this.toaster.error("Please Select Section !");
        this.Status=1;
      }
      else if(this.Student.DateOfBirth=="")
      {
        this.toaster.error("Please Select Date of Birth !");
        this.Status=1;
      }
      else if(this.Student.StudentAdharNo=="")
      {
        this.toaster.error("Please Enter Student Adhar No. !");
        this.Status=1;
      }
      if(this.Status==0){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const nextTabLinkEl = document
          .querySelector('.nav-tabs .active')
          ?.closest('li')
          ?.nextElementSibling?.querySelector('a');
  
        if (nextTabLinkEl) {
          const nextTab = new bootstrap.Tab(nextTabLinkEl);
          nextTab.show();
        }
      }
    }
    else if(Tab==2)
    {
      if(this.Student.AcademicYear=="")
      {
        this.toaster.error("Please Select Academic Year !");
        this.Status=1;
      }
    }
    else if(Tab==3)
    {
      alert("Thired Tab is changed")
    }
    else if(Tab==4)
    {
      alert("Fourth Tab")
    }
    
  }

  onPreviousClick(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const prevTabLinkEl = document
      .querySelector('.nav-tabs .active')
      ?.closest('li')
      ?.previousElementSibling?.querySelector('a');

    if (prevTabLinkEl) {
      const prevTab = new bootstrap.Tab(prevTabLinkEl);
      prevTab.show();
    }
  }

  GetSection() {
    this.ID = this.Student.CurrentClass;
    this.student.getallSection(this.ID).subscribe({
      next: (AllSection) => {
        this.AllSection = AllSection;
      },
      error: (response) => {
        alert(response);
      },
    });
  }

  ClearDate() {
    this.Student.DateOfBirth = '';
  }
  onGenderChange(gender: any) {
    this.Student.Gender = gender;
  }
}
