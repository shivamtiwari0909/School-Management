import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../Models/Master/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getLogIn(getlogIn:Login):Observable<Login>{
    const requestBody = { "UserName":getlogIn.UserName,"Password":getlogIn.Password};
    return this.http.post<Login>("https://localhost:44338/api/Master/MasterAdminLogin",requestBody);
  }
}
