import { TestBed } from '@angular/core/testing';

import { StudentExamScheduleService } from './student-exam-schedule.service';

describe('StudentExamScheduleService', () => {
  let service: StudentExamScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentExamScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
