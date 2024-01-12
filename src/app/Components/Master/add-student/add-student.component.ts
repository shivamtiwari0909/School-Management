import { Component } from '@angular/core';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AllClass, AllSection } from 'src/app/Models/Master/class';
import { Student } from 'src/app/Models/Master/student';
import { ClassService } from 'src/app/service/Master/class.service';
import { StudentService } from 'src/app/service/Master/student.service';
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
    StudentID: 0,
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
    Gender: 'Male',
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
  Status: Number = 0;
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

  onNextClick(Tab: number): void {
    this.Status = 0;
    if (Tab == 1) {
      if (this.Student.AcademicYear == '') {
        this.toaster.error('Please Select Academic Year !');
        this.Status = 1;
      } else if (this.Student.DateOfAddmission == '') {
        this.toaster.error('Please Select Date of Admission !');
        this.Status = 1;
      } else if (this.Student.StudentName == '') {
        this.toaster.error('Please Enter Student Name !');
        this.Status = 1;
      } else if (this.Student.UserName == '') {
        this.toaster.error('Please Enter User Name !');
        this.Status = 1;
      } else if (this.Student.Password == '') {
        this.toaster.error('Please Enter Password !');
        this.Status = 1;
      } else if (this.Student.CurrentClass == '') {
        this.toaster.error('Please Select Current Class !');
        this.Status = 1;
      } else if (this.Student.Section == '') {
        this.toaster.error('Please Select Section !');
        this.Status = 1;
      } else if (this.Student.DateOfBirth == '') {
        this.toaster.error('Please Select Date of Birth !');
        this.Status = 1;
      } else if (this.Student.StudentAdharNo == '') {
        this.toaster.error('Please Enter Student Adhar No. !');
        this.Status = 1;
      }
      if (this.Status == 0) {
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
    } else if (Tab == 2) {
      if (this.Student.MotherName == '') {
        this.toaster.error('Please Enter Moter Name !');
        this.Status = 1;
      } else if (this.Student.MotherContactNo == '') {
        this.toaster.error('Please enter mother contact no. !');
        this.Status = 1;
      } else if (this.Student.FatherName == '') {
        this.toaster.error('Please Enter Father Name !');
        this.Status = 1;
      } else if (this.Student.FatherContactNo == '') {
        this.toaster.error('Please Enter Father Contact No. !');
        this.Status = 1;
      } else if (this.Student.PermanentAddress == '') {
        this.toaster.error('Please Permanent Address !');
        this.Status = 1;
      } else if (this.Student.LocalAddress == '') {
        this.toaster.error('Please Enter Local Address !');
        this.Status = 1;
      } else if (this.Student.Village == '') {
        this.toaster.error('Please Enter Village !');
        this.Status = 1;
      } else if (this.Student.PoliceStation == '') {
        this.toaster.error('Please Enter Police Station !');
        this.Status = 1;
      } else if (this.Student.PinCode == '') {
        this.toaster.error('Please Enter Pin Code !');
        this.Status = 1;
      } else if (this.Student.State == '') {
        this.toaster.error('Please Enter State !');
        this.Status = 1;
      } else if (this.Student.Country == '') {
        this.toaster.error('Please Enter Country !');
        this.Status = 1;
      }
      if (this.Status == 0) {
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
    } else if (Tab == 3) {
      if (this.Student.LastInstituteName == '') {
        this.toaster.error('Please enter Last Institute Name !');
        this.Status = 1;
      } else if (this.Student.LastClassAttended == '') {
        this.toaster.error('Please enter last class attendent !');
        this.Status = 1;
      } else if (this.Student.ResultOfLastClass == '') {
        this.toaster.error('Please enter Result of Last Class !');
        this.Status = 1;
      } else if (this.Student.TransferCertificateNo == '') {
        this.toaster.error('Please enter Transfer certificate No. !');
        this.Status = 1;
      } else if (this.Student.TransfeCertificateDate == '') {
        this.toaster.error('Please enter Transfer Certificate Date !');
        this.Status = 1;
      }
      if (this.Status == 0) {
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
    } else if (Tab == 4) {
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

  onFileChange(Type: string, event: any) {
    const files = event.target.files;
    if (Type == 'Photo') {
      if (files.length > 0) {
        this.Student.StudentPhoto = files[0];
      }
    } else if (Type == 'Marksheet') {
      this.Student.LastClassMarkSheetPhoto = files[0];
    } else if (Type == 'Transfer') {
      this.Student.TransferCertificatePhoto = files[0];
    } else if (Type == 'Birth') {
      this.Student.BirthCertificatePhoto = files[0];
    } else if (Type == 'Adhar') {
      this.Student.AdharCardPhoto = files[0];
    }
  }

  ClearData() {
    (this.Student.StudentID = 0),
      (this.Student.AcademicYear = ''),
      (this.Student.RegNo = ''),
      (this.Student.AdmissionNo = ''),
      (this.Student.DateOfAddmission = ''),
      (this.Student.StudentName = ''),
      (this.Student.UserName = ''),
      (this.Student.Password = ''),
      (this.Student.StudentEmail = ''),
      (this.Student.CurrentClass = ''),
      (this.Student.Section = ''),
      (this.Student.MobileNo = ''),
      (this.Student.DateOfBirth = ''),
      (this.Student.RollNo = ''),
      (this.Student.BloodGroup = ''),
      (this.Student.Gender = ''),
      (this.Student.StudentAdharNo = ''),
      (this.Student.StudentPhoto = null),
      (this.Student.MotherName = ''),
      (this.Student.MotherQualification = ''),
      (this.Student.MotherContactNo = ''),
      (this.Student.FatherName = ''),
      (this.Student.FatherQualification = ''),
      (this.Student.FatherEmail = ''),
      (this.Student.FatherContactNo = ''),
      (this.Student.YearlyIncome = ''),
      (this.Student.MotherToung = ''),
      (this.Student.PermanentAddress = ''),
      (this.Student.LocalAddress = ''),
      (this.Student.Village = ''),
      (this.Student.Post = ''),
      (this.Student.PoliceStation = ''),
      (this.Student.PinCode = ''),
      (this.Student.City = ''),
      (this.Student.State = ''),
      (this.Student.Country = ''),
      (this.Student.Religion = ''),
      (this.Student.Category = ''),
      (this.Student.MedicalHistory = ''),
      (this.Student.Cast = ''),
      (this.Student.LastInstituteName = ''),
      (this.Student.LastClassAttended = ''),
      (this.Student.ResultOfLastClass = ''),
      (this.Student.LastInstituteAffiliatedTo = ''),
      (this.Student.TransferCertificateNo = ''),
      (this.Student.TransfeCertificateDate = ''),
      (this.Student.StudentBankAccountNo = ''),
      (this.Student.BankIFSC = ''),
      (this.Student.MonthlyFeesDiscountAmount = ''),
      (this.Student.GovermentIDName = ''),
      (this.Student.AdharCardPhoto = null),
      (this.Student.BirthCertificatePhoto = null),
      (this.Student.TransferCertificatePhoto = null),
      (this.Student.LastClassMarkSheetPhoto = null);
  }

  AddStudent() {
    if (this.Student.GovermentIDName == '') {
      this.toaster.error('Please enter Goverment ID !');
      return;
    } else if (this.Student.AdharCardPhoto == null) {
      this.toaster.error('Please select AdharCard Photo !');
      return;
    } else if (this.Student.BirthCertificatePhoto == null) {
      this.toaster.error('Please select Birth Certificate Photo !');
      return;
    } else if (this.Student.TransferCertificatePhoto == null) {
      this.toaster.error('Please select Transfer Certificate Photo !');
      return;
    } else if (this.Student.LastClassMarkSheetPhoto == null) {
      this.toaster.error('Please select MarkSheet Photo !');
      return;
    } else {
      console.log(this.Student);
      this.student.addStudent(this.Student).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toaster.error(res.Message);
          } else {
            this.toaster.success(res.Message);
            this.ClearData();
          }
        },
        error: (res) => {
          this.toaster.error(res);
        },
      });
    }
  }
}
