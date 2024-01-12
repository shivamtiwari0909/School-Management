import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyCalenderComponent } from './add-monthly-calender.component';

describe('AddMonthlyCalenderComponent', () => {
  let component: AddMonthlyCalenderComponent;
  let fixture: ComponentFixture<AddMonthlyCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMonthlyCalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMonthlyCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
