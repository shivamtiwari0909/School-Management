import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassRoutineComponent } from './student-class-routine.component';

describe('StudentClassRoutineComponent', () => {
  let component: StudentClassRoutineComponent;
  let fixture: ComponentFixture<StudentClassRoutineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentClassRoutineComponent]
    });
    fixture = TestBed.createComponent(StudentClassRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
