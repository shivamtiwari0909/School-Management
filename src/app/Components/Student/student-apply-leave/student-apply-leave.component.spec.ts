import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplyLeaveComponent } from './student-apply-leave.component';

describe('StudentApplyLeaveComponent', () => {
  let component: StudentApplyLeaveComponent;
  let fixture: ComponentFixture<StudentApplyLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentApplyLeaveComponent]
    });
    fixture = TestBed.createComponent(StudentApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
