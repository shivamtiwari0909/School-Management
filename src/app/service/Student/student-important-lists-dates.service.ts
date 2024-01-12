import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllImportantListsDates } from 'src/app/Models/Student/student-important-lists-dates';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentImportantListsDatesService {
  constructor(private http: HttpClient) {}
  GetImportantListsDates(): Observable<AllImportantListsDates> {
    return this.http.get<AllImportantListsDates>(`https://localhost:44338/api/Student/GetStudentImportantListsDates`);
  }
}
