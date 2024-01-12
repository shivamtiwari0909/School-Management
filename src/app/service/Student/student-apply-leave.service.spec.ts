import { TestBed } from '@angular/core/testing';

import { StudentApplyLeaveService } from './student-apply-leave.service';

describe('StudentApplyLeaveService', () => {
  let service: StudentApplyLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentApplyLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
