import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/Master/log-in/log-in.component';
import { HeaderComponent } from './Components/Master/header/header.component';
import { DashboardComponent } from './Components/Master/dashboard/dashboard.component';
import { authGuard, authGuardStudent } from './service/Master/auth.guard';
import { AddSubjectComponent } from './Components/Master/add-subject/add-subject.component';
import { ChangePasswordComponent } from './Components/Master/change-password/change-password.component';
import { ClassComponent } from './Components/Master/class/class.component';
import { AddTeacherComponent } from './Components/Master/add-teacher/add-teacher.component';
import { ShowteacherComponent } from './Components/Master/showteacher/showteacher.component';
import { AddStudentComponent } from './Components/Master/add-student/add-student.component';

// Student Panel
import { StudentDashboardComponent } from './Components/Student/student-dashboard/student-dashboard.component';
import { StudentApplyLeaveComponent } from './Components/Student/student-apply-leave/student-apply-leave.component';
import { StudentClassRoutineComponent } from './Components/Student/student-class-routine/student-class-routine.component';
import { StudentClassWorkComponent } from './Components/Student/student-class-work/student-class-work.component';
import { StudentDailyNotesComponent } from './Components/Student/student-daily-notes/student-daily-notes.component';
import { StudentExamScheduleComponent } from './Components/Student/student-exam-schedule/student-exam-schedule.component';
import { StudentExamsResultComponent } from './Components/Student/student-exams-result/student-exams-result.component';
import { StudentFeesHistoryComponent } from './Components/Student/student-fees-history/student-fees-history.component';
import { StudentHomeWorkComponent } from './Components/Student/student-home-work/student-home-work.component';
import { StudentImportantListsDatesComponent } from './Components/Student/student-important-lists-dates/student-important-lists-dates.component';
import { StudentLibraryBookComponent } from './Components/Student/student-library-book/student-library-book.component';
import { StudentLiveClassComponent } from './Components/Student/student-live-class/student-live-class.component';
import { StudentMonthlyCalenderComponent } from './Components/Student/student-monthly-calender/student-monthly-calender.component';
import { StudentPayOnlineComponent } from './Components/Student/student-pay-online/student-pay-online.component';
import { StudentMyExamsComponent } from './Components/Student/student-my-exams/student-my-exams.component';
import { StudentPhotoGalleryComponent } from './Components/Student/student-photo-gallery/student-photo-gallery.component';
import { StudentProfileReportComponent } from './Components/Student/student-profile-report/student-profile-report.component';
import { StudentReturnBookComponent } from './Components/Student/student-return-book/student-return-book.component';
import { StudentStudyMaterialComponent } from './Components/Student/student-study-material/student-study-material.component';
import { StudentSubjectTeachersComponent } from './Components/Student/student-subject-teachers/student-subject-teachers.component';
import { StudentVideoTutorialComponent } from './Components/Student/student-video-tutorial/student-video-tutorial.component';
import { StudentViewCurriculumComponent } from './Components/Student/student-view-curriculum/student-view-curriculum.component';
import { StudentViewMarksheetComponent } from './Components/Student/student-view-marksheet/student-view-marksheet.component';
import { StudentViewNoticesComponent } from './Components/Student/student-view-notices/student-view-notices.component';
import { StudentChangePasswordComponent } from './Components/Student/student-change-password/student-change-password.component';
import { AddMonthlyCalenderComponent } from './Components/Student/add-monthly-calender/add-monthly-calender.component';
import { StudentLogInComponent } from './Components/Student/student-log-in/student-log-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
    canActivate: [authGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-class',
    component: ClassComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-teacher',
    component: AddTeacherComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-teacher/:id',
    component: AddTeacherComponent,
    canActivate: [authGuard],
  },
  {
    path: 'show-teacher',
    component: ShowteacherComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add-monthly-calender',
    component: AddMonthlyCalenderComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-change-password',
    component: StudentChangePasswordComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-photo-gallery',
    component: StudentPhotoGalleryComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-important-lists-dates',
    component: StudentImportantListsDatesComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-view-notices',
    component: StudentViewNoticesComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-return-book',
    component: StudentReturnBookComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-library-book',
    component: StudentLibraryBookComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-pay-online',
    component: StudentPayOnlineComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-fees-history',
    component: StudentFeesHistoryComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-exams-result',
    component: StudentExamsResultComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-my-exams',
    component: StudentMyExamsComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-view-marksheet',
    component: StudentViewMarksheetComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-exam-schedule',
    component: StudentExamScheduleComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-monthly-calender',
    component: StudentMonthlyCalenderComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-view-curriculum',
    component: StudentViewCurriculumComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-study-material',
    component: StudentStudyMaterialComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-class-work',
    component: StudentClassWorkComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-home-work',
    component: StudentHomeWorkComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-daily-notes',
    component: StudentDailyNotesComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-video-tutorial',
    component: StudentVideoTutorialComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-apply-leave',
    component: StudentApplyLeaveComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-profile-report',
    component: StudentProfileReportComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-subject-teachers',
    component: StudentSubjectTeachersComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-class-routine',
    component: StudentClassRoutineComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-live-class',
    component: StudentLiveClassComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-dashboard',
    component: StudentDashboardComponent,
    canActivate: [authGuardStudent],
  },
  {
    path: 'student-login',
    component: StudentLogInComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
