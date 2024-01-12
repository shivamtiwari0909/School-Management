import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllViewNotices } from 'src/app/Models/Student/student-view-notices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentViewNoticesService {
  constructor(private http: HttpClient) {}
  GetViewMarksheet(): Observable<AllViewNotices> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllViewNotices>(`https://localhost:44338/api/Student/GetStudentViewNotices`);
  }
}
