import { Component, signal, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
// import interactionPlugin from '@fullcalendar/interaction';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';
// import { FullCalendarComponent } from '@fullcalendar/angular';
import { AllMonthlyCalender, GetAllEventType, StudentMonthlyCalender, StudentEventType, StudentCalender } from 'src/app/Models/Student/student-monthly-calender';
import { INITIAL_EVENTS, createEventId, StudentMonthlyCalenderService } from 'src/app/service/Student/student-monthly-calender.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'app-student-monthly-calender',
  selector: 'app-root',
  templateUrl: './student-monthly-calender.component.html',
  styleUrls: ['./student-monthly-calender.component.css']
})
export class StudentMonthlyCalenderComponent {
  // @ViewChild('calendar')
  // calendar!: FullCalendarComponent;

  @ViewChild('closebutton', { static: false })
  closebutton!: ElementRef;

  Events: any[] = [];
  // calendarOptions: CalendarOptions = {
  //   plugins: [dayGridPlugin, interactionPlugin],
  //   initialView: 'dayGridMonth',
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  //   },
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  // };

  months: string[] = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  selectedMonth: string;

  years: number[] = this.generateYears();
  selectedYear: number;

  allStudentMonthlyCalender: StudentCalender[] | undefined;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private studentMonthlyCalenderService: StudentMonthlyCalenderService,
    private router: Router,
    private toastr: ToastrService,
    private httpClient: HttpClient
  ) { 
    const currentDate = new Date();
    this.selectedMonth = this.months[currentDate.getMonth()];
    this.selectedYear = currentDate.getFullYear();
  }

  private generateYears(): number[] {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 10;
    const endYear = currentYear + 10;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  

  AllEventType: GetAllEventType = {
    Status: 0,
    Message: '',
    GetAllEventType: [],
  };

  AllMonthlyCal: AllMonthlyCalender = {
    Status: 0,
    Message: '',
    GetAllCalender: [],
  };

  ngOnInit(): void {
    this.studentMonthlyCalenderService.getAllEventType().subscribe({
      next: (AllEvent) => {
        this.AllEventType = AllEvent;
      },
      error: (response) => {
        alert(response);
      },
    });

    // setTimeout(() => {
    //   this.studentMonthlyCalenderService.getallStudentMonthlyCalendere().subscribe((data) => {
    //     this.AllMonthlyCal = data;
    //     this.allStudentMonthlyCalender = this.AllMonthlyCal.GetAllCalender;
    //     this.Events.push(...this.allStudentMonthlyCalender);
    //     console.log(this.Events);
    //   });
    // }, 1200);


    // setTimeout(() => {
    //   this.calendarOptions = signal<CalendarOptions>({
    //     initialView:'dayGridMonth',
    //     initialEvents: this.Eventsng 
    //   })
    // }, 35000);

    this.studentMonthlyCalenderService.getallStudentMonthlyCalendere().subscribe((res: any) => {
      //this.Events.push(res);
      this.AllMonthlyCal = res;
      this.allStudentMonthlyCalender = this.AllMonthlyCal.GetAllCalender;
      this.Events.push(...this.allStudentMonthlyCalender);
      console.log(this.Events);
    });
    
    setTimeout(() => {
      //return this.httpClient.get('https://localhost:44338/api/Student/GetAllStudentMonthlyCalender?StudentID=1').subscribe((res: any) => {
      
    }, 2200);
    // setTimeout(() => {
    //   this.calendarOptions = {
    //     plugins: [
    //       interactionPlugin,
    //       dayGridPlugin,
    //       timeGridPlugin,
    //       listPlugin,
    //     ],
    //     headerToolbar: {
    //       left: 'prev,next today',
    //       center: 'title',
    //       right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    //     },
    //     initialView: 'dayGridMonth',
    //     events: this.Events,
    //     //dateClick: this.onDateClick.bind(this),
    //     eventClick: this.handleEventClick.bind(this),
    //   };
    // }, 2500);
  }

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  AllMonthly: AllMonthlyCalender | null = null;
  Monthlycal: StudentMonthlyCalender = {
    UserID: 0,
    EventTypeID: 0,
    EventID: 0,
    EventName: '',
    StartDate: this.getCurrentDate(),
    EndDate: this.getCurrentDate(),
    StartTime: '',
    EndTime: '',
    Description: '',
    Status: 0,
    Message: ''
  };

  ClearData() {
    this.Monthlycal.UserID = 0;
    this.Monthlycal.EventID = 0;
    this.Monthlycal.EventTypeID = 0;
    this.Monthlycal.EventName = '';
    this.Monthlycal.StartDate = '';
    this.Monthlycal.EndDate = '';
    this.Monthlycal.StartTime = '';
    this.Monthlycal.EndTime = '';
    this.Monthlycal.Description = '';
  }

  calendarVisible = signal(true);
  // calendarOptions = signal<CalendarOptions>({
  //   plugins: [
  //     interactionPlugin,
  //     dayGridPlugin,
  //     timeGridPlugin,
  //     listPlugin,
  //   ],
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //   initialView: 'dayGridMonth',
  //   initialEvents: this.Events, // alternatively, use the `events` setting to fetch from a feed
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,
  //   select: this.handleDateSelect.bind(this),
  //   eventClick: this.handleEventClick.bind(this),
  //   eventsSet: this.handleEvents.bind(this),
  //   /* you can update a remote database when these fire:
  //   eventAdd:
  //   eventChange:
  //   eventRemove:
  //   */
  // });
  currentEvents = signal<EventApi[]>([]);

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  // handleWeekendsToggle() {
  //   this.calendarOptions.update((options) => ({
  //     ...options,
  //     weekends: !options.weekends,
  //   }));
  // }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove();
    // }
    if (confirm(`${clickInfo.event.display}`)) {
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}

