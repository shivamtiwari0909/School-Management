import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogInComponent } from './student-log-in.component';

describe('StudentLogInComponent', () => {
  let component: StudentLogInComponent;
  let fixture: ComponentFixture<StudentLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLogInComponent]
    });
    fixture = TestBed.createComponent(StudentLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
