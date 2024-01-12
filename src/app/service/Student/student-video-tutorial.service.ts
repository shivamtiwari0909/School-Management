import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllVideoTutorial } from 'src/app/Models/Student/student-video-tutorial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentVideoTutorialService {
  constructor(private http: HttpClient) {}
  GetVideoTutorial(): Observable<AllVideoTutorial> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllVideoTutorial>(`https://localhost:44338/api/Student/GetStudentVideoTutorialService?StudentID=${StudentID}`);
  }
}
