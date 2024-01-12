import { TestBed } from '@angular/core/testing';

import { StudentViewNoticesService } from './student-view-notices.service';

describe('StudentViewNoticesService', () => {
  let service: StudentViewNoticesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentViewNoticesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
