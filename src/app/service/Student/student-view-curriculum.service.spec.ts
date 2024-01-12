import { TestBed } from '@angular/core/testing';

import { StudentViewCurriculumService } from './student-view-curriculum.service';

describe('StudentViewCurriculumService', () => {
  let service: StudentViewCurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentViewCurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
