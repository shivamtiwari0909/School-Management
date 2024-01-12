import { TestBed } from '@angular/core/testing';

import { AddMonthlyCalenderService } from './add-monthly-calender.service';

describe('AddMonthlyCalenderService', () => {
  let service: AddMonthlyCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMonthlyCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
