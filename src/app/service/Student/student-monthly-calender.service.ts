import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';
import { AllMonthlyCalender, StudentMonthlyCalender, GetAllEventType } from 'src/app/Models/Student/student-monthly-calender';
import { Observable } from 'rxjs';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

@Injectable({
  providedIn: 'root'
})
export class StudentMonthlyCalenderService {
  constructor(private http: HttpClient) {}

  getAllEventType():Observable<GetAllEventType>{
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<GetAllEventType>(`https://localhost:44338/api/Student/GetStudentEventType?StudentID=${StudentID}`);
  }

  addStudentMonthlyCalender(addMonthlyCalender: StudentMonthlyCalender): Observable<StudentMonthlyCalender> {
    let StudentID = localStorage.getItem("StudentID");
    const requestBody = {
      EventID: addMonthlyCalender.EventID,
      EventTypeID: addMonthlyCalender.EventTypeID,
      UserID: StudentID,
      EventName: addMonthlyCalender.EventName,
      StartDate: addMonthlyCalender.StartDate,
      EndDate: addMonthlyCalender.EndDate,
      StartTime: addMonthlyCalender.StartTime,
      EndTime: addMonthlyCalender.EndTime,
      Description: addMonthlyCalender.Description,
    };
    return this.http.post<StudentMonthlyCalender>('https://localhost:44338/api/Student/AddUpdateStudentMonthlyCalender', requestBody);
  }

  getallStudentMonthlyCalendere(): Observable<AllMonthlyCalender> {
    let StudentID = localStorage.getItem("StudentID");
    return this.http.get<AllMonthlyCalender>(`https://localhost:44338/api/Student/GetAllStudentMonthlyCalender?StudentID=${StudentID}`);
  }
}
export const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: TODAY_STR
  // },
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: TODAY_STR ,
  //   end: TODAY_STR 
  // },
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: TODAY_STR ,
  //   end: TODAY_STR 
  // }
  
];
export function createEventId() {
  return String(eventGuid++);
}
