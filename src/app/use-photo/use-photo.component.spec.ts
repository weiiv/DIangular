import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePhotoComponent } from './use-photo.component';

describe('UsePhotoComponent', () => {
  let component: UsePhotoComponent;
  let fixture: ComponentFixture<UsePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
