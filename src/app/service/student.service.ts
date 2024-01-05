import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AllSection } from '../Models/Master/class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getallSection(id:any): Observable<AllSection> {
    return this.http.get<AllSection>(
      `https://localhost:44338/api/Master/GetAllSection?ID=${id}`
    );
  }
}
