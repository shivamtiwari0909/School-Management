import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllHomeWork } from 'src/app/Models/Student/student-home-work';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentHomeWorkService {
  constructor(private http: HttpClient) {}
  GetHomeWork(): Observable<AllHomeWork> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllHomeWork>(`https://localhost:44338/api/Student/GetStudentHomeWork?StudentID=${StudentID}`);
  }
}
