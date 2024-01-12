import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllStudyMaterial } from 'src/app/Models/Student/student-study-material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentStudyMaterialService {
  constructor(private http: HttpClient) {}
  GetStudyMaterial(): Observable<AllStudyMaterial> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllStudyMaterial>(`https://localhost:44338/api/Student/GetStudentStudyMaterial?StudentID=${StudentID}`);
  }
}
