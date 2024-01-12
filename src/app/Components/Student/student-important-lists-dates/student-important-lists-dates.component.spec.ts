import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentImportantListsDatesComponent } from './student-important-lists-dates.component';

describe('StudentImportantListsDatesComponent', () => {
  let component: StudentImportantListsDatesComponent;
  let fixture: ComponentFixture<StudentImportantListsDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentImportantListsDatesComponent]
    });
    fixture = TestBed.createComponent(StudentImportantListsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
