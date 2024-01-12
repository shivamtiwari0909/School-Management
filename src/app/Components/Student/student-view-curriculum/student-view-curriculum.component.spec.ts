import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewCurriculumComponent } from './student-view-curriculum.component';

describe('StudentViewCurriculumComponent', () => {
  let component: StudentViewCurriculumComponent;
  let fixture: ComponentFixture<StudentViewCurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewCurriculumComponent]
    });
    fixture = TestBed.createComponent(StudentViewCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
