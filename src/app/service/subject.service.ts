import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllSubjects, Subject } from '../Models/Master/subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  addSubject(addSubject: Subject): Observable<Subject> {
    const requestBody = {
      SubjectID: addSubject.SubjectID,
      SubjectName: addSubject.SubjectName,
      SubjectCode: addSubject.SubjectCode,
      SequenceNo: addSubject.SequenceNo,
      SubjectType: addSubject.SubjectType,
      CreatedBy: 'Admin',
    };
    return this.http.post<Subject>(
      'https://localhost:44338/api/Master/AddSubject',
      requestBody
    );
  }

  getallSubject(): Observable<AllSubjects> {
    return this.http.get<AllSubjects>(
      'https://localhost:44338/api/Master/GetAllSubject'
    );
  }

  deleteSubject(id: number): Observable<any> {
    return this.http.delete(
      `https://localhost:44338/api/Master/DeleteSubject?ID=${id}`
    );
  }

  editHotelRoomName(id: number): Observable<Subject> {
    return this.http.get<Subject>(
      `https://localhost:44338/api/Master/EditSubject?ID=${id}`
    );
  }
}
