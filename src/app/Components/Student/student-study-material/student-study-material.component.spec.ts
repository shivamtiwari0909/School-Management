import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStudyMaterialComponent } from './student-study-material.component';

describe('StudentStudyMaterialComponent', () => {
  let component: StudentStudyMaterialComponent;
  let fixture: ComponentFixture<StudentStudyMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentStudyMaterialComponent]
    });
    fixture = TestBed.createComponent(StudentStudyMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
