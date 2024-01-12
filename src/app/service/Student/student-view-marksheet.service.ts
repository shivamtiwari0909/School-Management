import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllExam, AllExamSchedule } from 'src/app/Models/Student/student-exam-schedule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentViewMarksheetService {
  constructor(private http: HttpClient) {}
  GetViewMarksheet(): Observable<AllExam> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllExam>(`https://localhost:44338/api/Student/GetStudentViewMarksheet?StudentID=${StudentID}`);
  }
  GetExamSchedule(id: number): Observable<AllExamSchedule> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllExamSchedule>(`https://localhost:44338/api/Student/GetStudentExamSchedule?StudentID=${StudentID}&ExamID=${id}`);
  }
}
