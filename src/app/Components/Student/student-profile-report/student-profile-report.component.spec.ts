import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileReportComponent } from './student-profile-report.component';

describe('StudentProfileReportComponent', () => {
  let component: StudentProfileReportComponent;
  let fixture: ComponentFixture<StudentProfileReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProfileReportComponent]
    });
    fixture = TestBed.createComponent(StudentProfileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
