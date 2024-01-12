import { TestBed } from '@angular/core/testing';

import { StudentDailyNotesService } from './student-daily-notes.service';

describe('StudentDailyNotesService', () => {
  let service: StudentDailyNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDailyNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
