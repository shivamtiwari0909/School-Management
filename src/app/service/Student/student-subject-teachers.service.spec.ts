import { TestBed } from '@angular/core/testing';

import { StudentSubjectTeachersService } from './student-subject-teachers.service';

describe('StudentSubjectTeachersService', () => {
  let service: StudentSubjectTeachersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSubjectTeachersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
