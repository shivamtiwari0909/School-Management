import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AllSection } from '../Models/Master/class';
import { Student } from '../Models/Master/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getallSection(id:any): Observable<AllSection> {
    return this.http.get<AllSection>(
      `https://localhost:44338/api/Master/GetAllSection?ID=${id}`
    );
  }

  addStudent(Student: Student): Observable<any> {
    const formtData: FormData = new FormData();
    formtData.append('StudentID', Student.StudentID.toString());
    formtData.append('AcademicYear', Student.AcademicYear);
    formtData.append('RegNo', Student.RegNo);
    formtData.append('AdmissionNo', Student.AdmissionNo);
    formtData.append('DateOfAddmission', Student.DateOfAddmission);
    formtData.append('StudentName', Student.StudentName);
    formtData.append('UserName', Student.UserName);
    formtData.append('Password', Student.Password);
    formtData.append('StudentEmail', Student.StudentEmail);
    formtData.append('CurrentClass', Student.CurrentClass);
    formtData.append('Section', Student.Section);
    formtData.append('MobileNo', Student.MobileNo);
    formtData.append('DateOfBirth', Student.DateOfBirth);
    formtData.append('RollNo', Student.RollNo);
    formtData.append('BloodGroup', Student.BloodGroup);
    formtData.append('Gender', Student.Gender);
    formtData.append('StudentAdharNo', Student.StudentAdharNo);

    if (Student.StudentPhoto != null) {
      formtData.append('StudentPhoto', Student.StudentPhoto);
    }

    formtData.append('MotherName', Student.MotherName);
    formtData.append('MotherQualification', Student.MotherQualification);
    formtData.append('MotherContactNo', Student.MotherContactNo);
    formtData.append('FatherName', Student.FatherName);
    formtData.append('FatherQualification', Student.FatherQualification);
    formtData.append('FatherEmail', Student.FatherEmail);
    formtData.append('FatherContactNo', Student.FatherContactNo);
    formtData.append('YearlyIncome', Student.YearlyIncome);
    formtData.append('MotherToung', Student.MotherToung);
    formtData.append('PermanentAddress', Student.PermanentAddress);
    formtData.append('LocalAddress', Student.LocalAddress);
    formtData.append('Village', Student.Village);
    formtData.append('Post', Student.Post);
    formtData.append('PoliceStation', Student.PoliceStation);
    formtData.append('PinCode', Student.PinCode);
    formtData.append('City', Student.City);
    formtData.append('State', Student.State);
    formtData.append('Country', Student.Country);
    formtData.append('Religion', Student.Religion);
    formtData.append('Category', Student.Category);
    formtData.append('MedicalHistory', Student.MedicalHistory);
    formtData.append('Cast', Student.Cast);
    formtData.append('LastInstituteName', Student.LastInstituteName); 
    formtData.append('LastClassAttended', Student.LastClassAttended); 
    formtData.append('ResultOfLastClass', Student.ResultOfLastClass); 
    formtData.append('LastInstituteAffiliatedTo', Student.LastInstituteAffiliatedTo); 
    formtData.append('TransferCertificateNo', Student.TransferCertificateNo); 
    formtData.append('TransfeCertificateDate', Student.TransfeCertificateDate); 
    formtData.append('StudentBankAccountNo', Student.StudentBankAccountNo); 
    formtData.append('BankIFSC', Student.BankIFSC); 
    formtData.append('MonthlyFeesDiscountAmount', Student.MonthlyFeesDiscountAmount); 
    formtData.append('GovermentIDName', Student.GovermentIDName); 
    formtData.append('CreatedBy', 'Admin');
    if (Student.AdharCardPhoto != null) {
      formtData.append('AdharCardPhoto', Student.AdharCardPhoto);
    }
    if (Student.BirthCertificatePhoto != null) {
      formtData.append('BirthCertificatePhoto', Student.BirthCertificatePhoto);
    }
    if (Student.TransferCertificatePhoto != null) {
      formtData.append('TransferCertificatePhoto', Student.TransferCertificatePhoto);
    }
    if (Student.LastClassMarkSheetPhoto != null) {
      formtData.append('LastClassMarkSheetPhoto', Student.LastClassMarkSheetPhoto);
    }
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    console.log(formtData);
    return this.http.post<any>(
      'https://localhost:44338/api/Master/AddStudent',
      formtData
      // { headers }
    );
  }
}
