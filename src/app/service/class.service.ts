import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AllSubjects } from '../Models/Master/subject';
import { AllClass, AllSection, Class, Section } from '../Models/Master/class';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private http: HttpClient) {}
  getallSubject(): Observable<AllSubjects> {
    return this.http.get<AllSubjects>(
      'https://localhost:44338/api/Master/GetAllSubject'
    );
  }

  addClass(addClass: Class): Observable<Class> {
    const requestBody = {
      ClassId: addClass.ClassID,
      ClassName: addClass.ClassName,
      ShortName: addClass.ShortName,
      PrimaySubject: addClass.PrimarySubject,
      OptionalSubject: addClass.OptionalSubject,
      Createdby: 'Admin',
    };
    return this.http.post<Class>(
      'https://localhost:44338/api/Master/AddClass',
      requestBody
    );
  }

  getAllClass(): Observable<AllClass> {
    return this.http.get<AllClass>(
      'https://localhost:44338/api/Master/GetAllClass'
    );
  }

  editClass(id: number): Observable<Class> {
    return this.http.get<Class>(
      `https://localhost:44338/api/Master/EditClass?ID=${id}`
    );
  }

  deleteClass(id: number): Observable<any> {
    return this.http.delete(
      `https://localhost:44338/api/Master/DeleteClass?ID=${id}`
    );
  }

  addSection(addSection: Section): Observable<Section> {
    const requestBody = {
      ClassID: addSection.ClassID,
      SectionID: addSection.SectionID,
      Name: addSection.Name,
      NickName: addSection.NickName,
      TeacherID: addSection.Teacher,
      CreatedBy: 'Admin',
    };
    return this.http.post<Section>(
      'https://localhost:44338/api/Master/AddSection',
      requestBody
    );
  }

  getAllSection(id: number): Observable<AllSection> {
    return this.http.get<AllSection>(
      `https://localhost:44338/api/Master/GetAllSection?ID=${id}`
    );
  }
  deleteSection(id: number): Observable<any> {
    return this.http.delete(
      `https://localhost:44338/api/Master/DeleteSection?ID=${id}`
    );
  }

  editSection(id: number): Observable<Section> {
    return this.http.get<Section>(
      `https://localhost:44338/api/Master/EditSection?ID=${id}`
    );
  }
}
