import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllTeacher, teacher } from '../../Models/Master/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddteacherService {
  constructor(private http: HttpClient) {}

  addTeacher(teacher: teacher): Observable<any> {
    console.log(teacher);
    const formtData: FormData = new FormData();
    formtData.append('TeacherID', teacher.TeacherID.toString());
    formtData.append('RegistrationNo', teacher.RegistrationNo);
    formtData.append('TeacherName', teacher.TeacherName);
    formtData.append('UserName', teacher.UserName);
    formtData.append('UserPassword', teacher.UserPassword);
    formtData.append('DateofBirth', teacher.DateofBirth);
    formtData.append('DateofJoining', teacher.DateofJoining);
    formtData.append('Gender', teacher.Gender);
    formtData.append('Country', teacher.Country);
    formtData.append('Phone', teacher.Phone);
    formtData.append('PublicContactWhatsApp', teacher.PublicContactWhatsApp);
    formtData.append('Email', teacher.Email);
    formtData.append('Department', teacher.Department);
    formtData.append('Speciality', teacher.Speciality);
    formtData.append('Qualification', teacher.Qualification);
    formtData.append('SpouseName', teacher.SpouseName);
    formtData.append('MotherName', teacher.MotherName);
    formtData.append('FatherName', teacher.FatherName);
    formtData.append('FatherMobileNo', teacher.FatherMobileNo);
    formtData.append('MotherMobileNo', teacher.MotherMobileNo);
    formtData.append('BloodGroup', teacher.BloodGroup);
    formtData.append('PermanentAddress', teacher.PermanentAddress);
    formtData.append('LocalAddress', teacher.LocalAddress);
    formtData.append('ExperienceDetails', teacher.ExperienceDetails);
    formtData.append('BankName', teacher.BankName);
    formtData.append('BankACNo', teacher.BankACNo);
    formtData.append('BankIFSCCode', teacher.BankIFSCCode);
    formtData.append('AadhaarNumber', teacher.AadhaarNumber);
    formtData.append('PanCard', teacher.PanCard);
    formtData.append('Passport', teacher.Passport);
    formtData.append('DLDetails', teacher.DLDetails);
    formtData.append('PFAccountNumber', teacher.PFAccountNumber);
    formtData.append('CreatedBy', 'Admin');
    if (teacher.TeacherImage != null) {
      formtData.append('TeacherImage', teacher.TeacherImage);
    }

    if (teacher.TeacherSignature != null) {
      formtData.append('TeacherSignature', teacher.TeacherSignature);
    }
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    console.log(formtData);
    return this.http.post<any>(
      'https://localhost:44338/api/Master/AddTeacher',
      formtData
      // { headers }
    );
  }

  getallTeacher(): Observable<AllTeacher> {
    return this.http.get<AllTeacher>(
      'https://localhost:44338/api/Master/GetAllTeacher'
    );
  }
  deleteTeacher(id: any): Observable<any> {
    return this.http.delete(
      `https://localhost:44338/api/Master/DeleteTeacher?ID=${id}`
    );
  }

  editTeacher(id: any): Observable<teacher> {
    return this.http.get<teacher>(
      `https://localhost:44338/api/Master/EditTeacher?ID=${id}`
    );
  }
}
