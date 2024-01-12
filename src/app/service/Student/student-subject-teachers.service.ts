import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllTeacherName } from 'src/app/Models/Student/student-subject-teachers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentSubjectTeachersService {
  constructor(private http: HttpClient) {}
  GetSubjectTeachers(): Observable<AllTeacherName> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllTeacherName>(`https://localhost:44338/api/Student/GetStudentSubjectTeachers?StudentID=${StudentID}`);
  }
}
