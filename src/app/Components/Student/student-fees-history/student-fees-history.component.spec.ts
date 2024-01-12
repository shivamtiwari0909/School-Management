import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesHistoryComponent } from './student-fees-history.component';

describe('StudentFeesHistoryComponent', () => {
  let component: StudentFeesHistoryComponent;
  let fixture: ComponentFixture<StudentFeesHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFeesHistoryComponent]
    });
    fixture = TestBed.createComponent(StudentFeesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
