import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentLogin } from 'src/app/Models/Student/student-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLogIn(getlogIn:StudentLogin):Observable<StudentLogin>{
    const requestBody = { "UserName":getlogIn.UserName,"Password":getlogIn.Password};
    return this.http.post<StudentLogin>("https://localhost:44338/api/Student/StudentLogin",requestBody);
  }
}
