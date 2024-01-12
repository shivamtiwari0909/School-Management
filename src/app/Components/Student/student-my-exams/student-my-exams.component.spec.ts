import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyExamsComponent } from './student-my-exams.component';

describe('StudentMyExamsComponent', () => {
  let component: StudentMyExamsComponent;
  let fixture: ComponentFixture<StudentMyExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMyExamsComponent]
    });
    fixture = TestBed.createComponent(StudentMyExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
