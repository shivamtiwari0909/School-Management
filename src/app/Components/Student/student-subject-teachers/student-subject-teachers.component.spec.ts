import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubjectTeachersComponent } from './student-subject-teachers.component';

describe('StudentSubjectTeachersComponent', () => {
  let component: StudentSubjectTeachersComponent;
  let fixture: ComponentFixture<StudentSubjectTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSubjectTeachersComponent]
    });
    fixture = TestBed.createComponent(StudentSubjectTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
