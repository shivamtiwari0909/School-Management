import { TestBed } from '@angular/core/testing';
import { StudentChangepassword } from './student-changepassword.service';

describe('StudentChangepassword', () => {
  let service: StudentChangepassword;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentChangepassword);
  });

  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
