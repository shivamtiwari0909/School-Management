import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMonthlyCalenderComponent } from './student-monthly-calender.component';

describe('StudentMonthlyCalenderComponent', () => {
  let component: StudentMonthlyCalenderComponent;
  let fixture: ComponentFixture<StudentMonthlyCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMonthlyCalenderComponent]
    });
    fixture = TestBed.createComponent(StudentMonthlyCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
