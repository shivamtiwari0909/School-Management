import { TestBed } from '@angular/core/testing';

import { AddteacherService } from './addteacher.service';

describe('AddteacherService', () => {
  let service: AddteacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddteacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
