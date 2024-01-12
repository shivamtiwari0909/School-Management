import { TestBed } from '@angular/core/testing';

import { StudentClassRoutineService } from './student-class-routine.service';

describe('StudentClassRoutineService', () => {
  let service: StudentClassRoutineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentClassRoutineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
