import { TestBed } from '@angular/core/testing';

import { StudentViewMarksheetService } from './student-view-marksheet.service';

describe('StudentViewMarksheetService', () => {
  let service: StudentViewMarksheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentViewMarksheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
