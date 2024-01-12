import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentChangePassword } from 'src/app/Models/Student/student-change-password'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentChangepasswordService {

  constructor(private http:HttpClient) { }

  changePassword(changePassword:StudentChangePassword):Observable<StudentChangePassword>{
    let StudentID = localStorage.getItem("StudentID");
    const requestBody = {"OldPassword":changePassword.Old,"NewPassword":changePassword.New,"StudentID":StudentID};
    return this.http.post<StudentChangePassword>("https://localhost:44338/api/Student/ChangePassword",requestBody);
  }
}
