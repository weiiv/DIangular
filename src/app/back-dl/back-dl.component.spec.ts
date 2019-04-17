import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDLComponent } from './back-dl.component';

describe('BackDLComponent', () => {
  let component: BackDLComponent;
  let fixture: ComponentFixture<BackDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
