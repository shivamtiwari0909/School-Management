import { TestBed } from '@angular/core/testing';

import { StudentHomeWorkService } from './student-home-work.service';

describe('StudentHomeWorkService', () => {
  let service: StudentHomeWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentHomeWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
