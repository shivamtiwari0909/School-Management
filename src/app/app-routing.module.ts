import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/Master/log-in/log-in.component';
import { HeaderComponent } from './Components/Master/header/header.component';
import { DashboardComponent } from './Components/Master/dashboard/dashboard.component';
import { authGuard } from './service/auth.guard';
import { AddSubjectComponent } from './Components/Master/add-subject/add-subject.component';
import { ChangePasswordComponent } from './Components/Master/change-password/change-password.component';
import { ClassComponent } from './Components/Master/class/class.component';
import { AddTeacherComponent } from './Components/Master/add-teacher/add-teacher.component';
import { ShowteacherComponent } from './Components/Master/showteacher/showteacher.component';
import { AddStudentComponent } from './Components/Master/add-student/add-student.component';

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
