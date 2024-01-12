import { TestBed } from '@angular/core/testing';

import { StudentImportantListsDatesService } from './student-important-lists-dates.service';

describe('StudentImportantListsDatesService', () => {
  let service: StudentImportantListsDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentImportantListsDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
