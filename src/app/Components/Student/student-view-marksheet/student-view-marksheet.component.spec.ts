import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewMarksheetComponent } from './student-view-marksheet.component';

describe('StudentViewMarksheetComponent', () => {
  let component: StudentViewMarksheetComponent;
  let fixture: ComponentFixture<StudentViewMarksheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewMarksheetComponent]
    });
    fixture = TestBed.createComponent(StudentViewMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
