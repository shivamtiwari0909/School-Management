import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDailyNotesComponent } from './student-daily-notes.component';

describe('StudentDailyNotesComponent', () => {
  let component: StudentDailyNotesComponent;
  let fixture: ComponentFixture<StudentDailyNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDailyNotesComponent]
    });
    fixture = TestBed.createComponent(StudentDailyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
