import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLibraryBookComponent } from './student-library-book.component';

describe('StudentLibraryBookComponent', () => {
  let component: StudentLibraryBookComponent;
  let fixture: ComponentFixture<StudentLibraryBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentLibraryBookComponent]
    });
    fixture = TestBed.createComponent(StudentLibraryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
