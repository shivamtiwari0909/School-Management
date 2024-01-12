import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllViewCurriculum } from 'src/app/Models/Student/student-view-curriculum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentViewCurriculumService {
  constructor(private http: HttpClient) {}
  GetViewCurriculum(): Observable<AllViewCurriculum> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllViewCurriculum>(`https://localhost:44338/api/Student/GetStudentViewCurriculum?StudentID=${StudentID}`);
  }
}
