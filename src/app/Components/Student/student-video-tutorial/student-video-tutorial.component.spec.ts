import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVideoTutorialComponent } from './student-video-tutorial.component';

describe('StudentVideoTutorialComponent', () => {
  let component: StudentVideoTutorialComponent;
  let fixture: ComponentFixture<StudentVideoTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentVideoTutorialComponent]
    });
    fixture = TestBed.createComponent(StudentVideoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
