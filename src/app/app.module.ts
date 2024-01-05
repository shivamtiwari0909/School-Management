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
    AddStudentComponent
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
  bootstrap: [AppComponent,AddStudentComponent]
})
export class AppModule { 
  
}
