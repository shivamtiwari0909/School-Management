import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AllClass, AllSection, StudentDailyNotes } from 'src/app/Models/Student/student-daily-notes'

@Injectable({
  providedIn: 'root'
})
export class StudentDailyNotesService {

  constructor(private http: HttpClient) { }
  getAllClass():Observable<AllClass>{
    return this.http.get<AllClass>(
      'https://localhost:44338/api/Student/GetStudentDailyNotesService'
    );
  }
  getAllSection(id: number): Observable<AllSection> {
    return this.http.get<AllSection>(
      `https://localhost:44338/api/Student/GetStudentSection?ClassId=${id}`
    );
  }
}
