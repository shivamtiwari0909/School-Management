import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamScheduleComponent } from './student-exam-schedule.component';

describe('StudentExamScheduleComponent', () => {
  let component: StudentExamScheduleComponent;
  let fixture: ComponentFixture<StudentExamScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentExamScheduleComponent]
    });
    fixture = TestBed.createComponent(StudentExamScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
