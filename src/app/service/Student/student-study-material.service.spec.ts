import { TestBed } from '@angular/core/testing';

import { StudentStudyMaterialService } from './student-study-material.service';

describe('StudentStudyMaterialService', () => {
  let service: StudentStudyMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentStudyMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
