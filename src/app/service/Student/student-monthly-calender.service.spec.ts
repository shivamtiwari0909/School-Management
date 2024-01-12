import { TestBed } from '@angular/core/testing';

import { StudentMonthlyCalenderService } from './student-monthly-calender.service';

describe('StudentMonthlyCalenderService', () => {
  let service: StudentMonthlyCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMonthlyCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
