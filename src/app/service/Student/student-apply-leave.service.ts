import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllApplyLeave, StudentApplyLeave } from 'src/app/Models/Student/student-apply-leave';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApplyLeaveService {
  constructor(private http: HttpClient) {}

  addStudentApplyLeave(addApplyLeave: StudentApplyLeave): Observable<StudentApplyLeave> {
    let StudentID = localStorage.getItem("StudentID");
    const requestBody = {
      LeaveID: addApplyLeave.LeaveID,
      StudentID: StudentID,
      Day: addApplyLeave.Day,
      FromDate: addApplyLeave.FromDate,
      ToDate: addApplyLeave.ToDate,
      Subject: addApplyLeave.Subject,
      Reason: addApplyLeave.Reason,
      Status: addApplyLeave.Status,
    };
    return this.http.post<StudentApplyLeave>('https://localhost:44338/api/Student/AddUpdateStudentApplyLeave', requestBody);
  }
  getallStudentApplyLeave(): Observable<AllApplyLeave> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllApplyLeave>(`https://localhost:44338/api/Student/GetAllStudentApplyLeave?StudentID=${StudentID}`);
  }

  deleteStudentApplyLeave(id: number): Observable<any> {
    return this.http.delete(
      `https://localhost:44338/api/Student/DeleteStudentApplyLeave?ID=${id}`
    );
  }

  editStudentApplyLeave(id: number): Observable<StudentApplyLeave> {
    return this.http.get<StudentApplyLeave>(
      `https://localhost:44338/api/Student/EditStudentApplyLeave?LeaveID=${id}`
    );
  }
}
