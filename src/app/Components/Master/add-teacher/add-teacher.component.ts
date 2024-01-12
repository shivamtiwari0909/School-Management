import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { teacher } from 'src/app/Models/Master/teacher';
import { AddteacherService } from 'src/app/service/Master/addteacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent {
  selectedGender: string = 'Male'; // Default value
  genders = ['Male', 'Female'];
  isEditMode: boolean = false;
  Teacher: teacher = {
    TeacherID: 0,
    RegistrationNo: '',
    TeacherName: '',
    UserName: '',
    UserPassword: '',
    DateofBirth: '',
    DateofJoining: '',
    Gender: '',
    Country: 'India',
    Phone: '',
    PublicContactWhatsApp: '',
    Email: '',
    Department: '',
    Speciality: '',
    Qualification: '',
    SpouseName: '',
    MotherName: '',
    FatherName: '',
    FatherMobileNo: '',
    MotherMobileNo: '',
    BloodGroup: '',
    PermanentAddress: '',
    LocalAddress: '',
    ExperienceDetails: '',
    BankName: '',
    BankACNo: '',
    BankIFSCCode: '',
    AadhaarNumber: '',
    PanCard: '',
    Passport: '',
    DLDetails: '',
    PFAccountNumber: '',
    TeacherImage: null,
    TeacherSignature: null,
    CreatedBy: '',
    Status: 0,
    Message: '',
  };
  constructor(
    private addteacher: AddteacherService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    this.isEditMode=!this.isEditMode;
    const teacherID = sessionStorage.getItem('TeacherID');
    if (teacherID) {
      this.Teacher.TeacherID = parseInt(teacherID);
      this.addteacher
        .editTeacher(teacherID.replace('"', '').replace('"', ''))
        .subscribe({
          next: (response) => {
            if ((response.Status = 0)) {
              this.toastr.error(response.Message);
            } else {
              this.Teacher = response;
              const cleanedDate: string = this.Teacher.DateofJoining.replace(/\s+\d{2}:\d{2}:\d{2}$/, '');
              const dateArray: string[] = cleanedDate.split('-');
              if(dateArray.length>0)
              {
                this.Teacher.DateofJoining=dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0];
              }
              const cleanedDate1 = this.Teacher.DateofBirth.replace(/\s+\d{2}:\d{2}:\d{2}$/, '');
              const dateArray1: string[] = cleanedDate1.split('-');
              if(dateArray1.length>0)
              {
                this.Teacher.DateofBirth=dateArray1[2]+'-'+dateArray1[1]+'-'+dateArray1[0];
              }
              this.selectedGender=this.Teacher.Gender;
              this.isEditMode=!this.isEditMode;
              sessionStorage.setItem('TeacherID','');
            }
          },
        });
    }
  }
  numberOnly(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  ClearData() {
    (this.Teacher.TeacherID = 0),
      (this.Teacher.RegistrationNo = ''),
      (this.Teacher.TeacherName = ''),
      (this.Teacher.UserName = ''),
      (this.Teacher.UserPassword = ''),
      (this.Teacher.DateofBirth = ''),
      (this.Teacher.DateofJoining = ''),
      (this.Teacher.Gender = ''),
      (this.Teacher.Country = 'India'),
      (this.Teacher.Phone = ''),
      (this.Teacher.PublicContactWhatsApp = ''),
      (this.Teacher.Email = ''),
      (this.Teacher.Department = ''),
      (this.Teacher.Speciality = ''),
      (this.Teacher.Qualification = ''),
      (this.Teacher.SpouseName = ''),
      (this.Teacher.MotherName = ''),
      (this.Teacher.FatherName = ''),
      (this.Teacher.FatherMobileNo = ''),
      (this.Teacher.MotherMobileNo = ''),
      (this.Teacher.BloodGroup = ''),
      (this.Teacher.PermanentAddress = ''),
      (this.Teacher.LocalAddress = ''),
      (this.Teacher.ExperienceDetails = ''),
      (this.Teacher.BankName = ''),
      (this.Teacher.BankACNo = ''),
      (this.Teacher.BankIFSCCode = ''),
      (this.Teacher.AadhaarNumber = ''),
      (this.Teacher.PanCard = ''),
      (this.Teacher.Passport = ''),
      (this.Teacher.DLDetails = ''),
      (this.Teacher.PFAccountNumber = ''),
      (this.Teacher.TeacherImage = null),
      (this.Teacher.TeacherSignature = null),
      (this.Teacher.CreatedBy = ''),
      (this.Teacher.Status = 0),
      (this.Teacher.Message = '');
  }
  onFileChangePhoto(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.Teacher.TeacherImage = files[0];
    }
  }
  onFileChangeSignature(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.Teacher.TeacherSignature = files[0];
    }
  }
  onGenderChange(event: any) {
    this.Teacher.Gender = event;
  }
  addTeacher() {
    if (!this.Teacher.RegistrationNo) {
      this.toastr.error('Please enter Registration No !');
      return;
    } else if (!this.Teacher.TeacherName) {
      this.toastr.error('Please enter Name !');
      return;
    } else if (!this.Teacher.UserName) {
      this.toastr.error('Please enter User Name !');
      return;
    } else if (!this.Teacher.UserPassword) {
      this.toastr.error('Please enter User Password !');
      return;
    } else if (!this.Teacher.DateofBirth) {
      this.toastr.error('Please enter Birth Day !');
      return;
    } else if (!this.Teacher.DateofJoining) {
      this.toastr.error('Please enter Date Of Joining !');
      return;
    } else if (!this.Teacher.Phone) {
      this.toastr.error('Please enter Phone No !');
      return;
    } else if (!this.Teacher.Email) {
      this.toastr.error('Please enter Email !');
      return;
    } else if (!this.Teacher.Qualification) {
      this.toastr.error('Please enter Qualification !');
      return;
    } else if (!this.Teacher.FatherName) {
      this.toastr.error('Please enter Father Name !');
      return;
    } else if (!this.Teacher.FatherMobileNo) {
      this.toastr.error('Please enter Father Mob. No !');
      return;
    } else if (!this.Teacher.BloodGroup) {
      this.toastr.error('Please enter Blood Group !');
      return;
    } else if (!this.Teacher.PermanentAddress) {
      this.toastr.error('Please enter Permanent Address !');
      return;
    } else if (!this.Teacher.LocalAddress) {
      this.toastr.error('Please enter Local Address !');
      return;
    } else if (this.Teacher.TeacherImage == null && this.Teacher.TeacherID==0) {
      this.toastr.error('Please select Photo !');
      return;
    } else if (this.Teacher.TeacherSignature == null && this.Teacher.TeacherID==0) {
      this.toastr.error('Please select Signature !');
      return;
    } else {
      this.addteacher.addTeacher(this.Teacher).subscribe({
        next: (res) => {
          if (res.Status == 0) {
            this.toastr.error(res.Message);
          } else {
            this.toastr.success(res.Message);
            this.ClearData();
          }
        },
        error: (response) => {
          this.toastr.error(response);
        },
      });
    }
  }
}
