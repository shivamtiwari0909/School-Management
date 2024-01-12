import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewNoticesComponent } from './student-view-notices.component';

describe('StudentViewNoticesComponent', () => {
  let component: StudentViewNoticesComponent;
  let fixture: ComponentFixture<StudentViewNoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewNoticesComponent]
    });
    fixture = TestBed.createComponent(StudentViewNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
