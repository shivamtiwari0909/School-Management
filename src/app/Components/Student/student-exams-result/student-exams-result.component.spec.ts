import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamsResultComponent } from './student-exams-result.component';

describe('StudentExamsResultComponent', () => {
  let component: StudentExamsResultComponent;
  let fixture: ComponentFixture<StudentExamsResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentExamsResultComponent]
    });
    fixture = TestBed.createComponent(StudentExamsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
