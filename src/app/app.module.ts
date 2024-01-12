import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/Master/log-in/log-in.component';
import { HeaderComponent } from './Components/Master/header/header.component';
import { FooterComponent } from './Components/Master/footer/footer.component';
import { DashboardComponent } from './Components/Master/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSubjectComponent } from './Components/Master/add-subject/add-subject.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './Components/Master/change-password/change-password.component';
import { ClassComponent } from './Components/Master/class/class.component';
import { AddTeacherComponent } from './Components/Master/add-teacher/add-teacher.component';
import { ShowteacherComponent } from './Components/Master/showteacher/showteacher.component';
import { DatePipe } from '@angular/common';
import { AddStudentComponent } from './Components/Master/add-student/add-student.component';
import { StudentLogInComponent } from './Components/Student/student-log-in/student-log-in.component';
import { StudentDashboardComponent } from './Components/Student/student-dashboard/student-dashboard.component';
import { StudentHeaderComponent } from './Components/Student/student-header/student-header.component';
import { StudentFooterComponent } from './Components/Student/student-footer/student-footer.component';
import { StudentLiveClassComponent } from './Components/Student/student-live-class/student-live-class.component';
import { StudentSubjectTeachersComponent } from './Components/Student/student-subject-teachers/student-subject-teachers.component';
import { StudentProfileReportComponent } from './Components/Student/student-profile-report/student-profile-report.component';
import { StudentVideoTutorialComponent } from './Components/Student/student-video-tutorial/student-video-tutorial.component';
import { StudentHomeWorkComponent } from './Components/Student/student-home-work/student-home-work.component';
import { StudentStudyMaterialComponent } from './Components/Student/student-study-material/student-study-material.component';
import { StudentViewCurriculumComponent } from './Components/Student/student-view-curriculum/student-view-curriculum.component';
import { StudentMonthlyCalenderComponent } from './Components/Student/student-monthly-calender/student-monthly-calender.component';
import { StudentViewMarksheetComponent } from './Components/Student/student-view-marksheet/student-view-marksheet.component';
import { StudentMyExamsComponent } from './Components/Student/student-my-exams/student-my-exams.component';
import { StudentExamsResultComponent } from './Components/Student/student-exams-result/student-exams-result.component';
import { StudentFeesHistoryComponent } from './Components/Student/student-fees-history/student-fees-history.component';
import { StudentPayOnlineComponent } from './Components/Student/student-pay-online/student-pay-online.component';
import { StudentChangePasswordComponent } from './Components/Student/student-change-password/student-change-password.component';
import { StudentExamScheduleComponent } from './Components/Student/student-exam-schedule/student-exam-schedule.component';
import { StudentDailyNotesComponent } from './Components/Student/student-daily-notes/student-daily-notes.component';
import { StudentClassWorkComponent } from './Components/Student/student-class-work/student-class-work.component';
import { StudentClassRoutineComponent } from './Components/Student/student-class-routine/student-class-routine.component';
import { StudentApplyLeaveComponent } from './Components/Student/student-apply-leave/student-apply-leave.component';
import { StudentPhotoGalleryComponent } from './Components/Student/student-photo-gallery/student-photo-gallery.component';
import { StudentImportantListsDatesComponent } from './Components/Student/student-important-lists-dates/student-important-lists-dates.component';
import { StudentViewNoticesComponent } from './Components/Student/student-view-notices/student-view-notices.component';
import { StudentReturnBookComponent } from './Components/Student/student-return-book/student-return-book.component';
import { StudentLibraryBookComponent } from './Components/Student/student-library-book/student-library-book.component';
import { AddMonthlyCalenderComponent } from './Components/Student/add-monthly-calender/add-monthly-calender.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AddSubjectComponent,
    ChangePasswordComponent,
    ClassComponent,
    AddTeacherComponent,
    ShowteacherComponent,
    AddStudentComponent,
    StudentLogInComponent,
    StudentDashboardComponent,
    StudentHeaderComponent,
    StudentFooterComponent,
    StudentLiveClassComponent,
    StudentSubjectTeachersComponent,
    StudentProfileReportComponent,
    StudentVideoTutorialComponent,
    StudentHomeWorkComponent,
    StudentStudyMaterialComponent,
    StudentViewCurriculumComponent,
    StudentMonthlyCalenderComponent,
    StudentViewMarksheetComponent,
    StudentMyExamsComponent,
    StudentExamsResultComponent,
    StudentFeesHistoryComponent,
    StudentPayOnlineComponent,
    StudentLibraryBookComponent,
    StudentReturnBookComponent,
    StudentViewNoticesComponent,
    StudentImportantListsDatesComponent,
    StudentPhotoGalleryComponent,
    StudentApplyLeaveComponent,
    StudentClassRoutineComponent,
    StudentClassWorkComponent,
    StudentDailyNotesComponent,
    StudentExamScheduleComponent,
    StudentChangePasswordComponent,
    AddMonthlyCalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
