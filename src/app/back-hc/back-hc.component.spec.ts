import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHCComponent } from './back-hc.component';

describe('BackHCComponent', () => {
  let component: BackHCComponent;
  let fixture: ComponentFixture<BackHCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackHCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
