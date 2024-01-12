import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllClassRoutine, StudentClassRoutine } from 'src/app/Models/Student/student-class-routine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentClassRoutineService {
  constructor(private http: HttpClient) {}
  GetClassRoutine(): Observable<AllClassRoutine> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllClassRoutine>(`https://localhost:44338/api/Student/GetStudentClassRoutine?StudentID=${StudentID}`);
  }
}
