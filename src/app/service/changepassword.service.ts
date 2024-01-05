import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Changepassword } from '../Models/Master/changepassword';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private http:HttpClient) { }

  changePassword(changePassword:Changepassword):Observable<Changepassword>{
    const requestBody = { "OldPassword":changePassword.Old,"NewPassword":changePassword.New};
    return this.http.post<Changepassword>("https://localhost:44338/api/Master/ChangePassword",requestBody);
  }
}
