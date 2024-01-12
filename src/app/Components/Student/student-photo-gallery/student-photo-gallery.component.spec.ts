import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPhotoGalleryComponent } from './student-photo-gallery.component';

describe('StudentPhotoGalleryComponent', () => {
  let component: StudentPhotoGalleryComponent;
  let fixture: ComponentFixture<StudentPhotoGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPhotoGalleryComponent]
    });
    fixture = TestBed.createComponent(StudentPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
