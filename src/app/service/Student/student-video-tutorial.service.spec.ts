import { TestBed } from '@angular/core/testing';

import { StudentVideoTutorialService } from './student-video-tutorial.service';

describe('StudentVideoTutorialService', () => {
  let service: StudentVideoTutorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentVideoTutorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
