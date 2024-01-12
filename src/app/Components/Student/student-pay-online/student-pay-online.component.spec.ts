import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPayOnlineComponent } from './student-pay-online.component';

describe('StudentPayOnlineComponent', () => {
  let component: StudentPayOnlineComponent;
  let fixture: ComponentFixture<StudentPayOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPayOnlineComponent]
    });
    fixture = TestBed.createComponent(StudentPayOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
