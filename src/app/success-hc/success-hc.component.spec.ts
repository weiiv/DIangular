import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessHCComponent } from './success-hc.component';

describe('SuccessHCComponent', () => {
  let component: SuccessHCComponent;
  let fixture: ComponentFixture<SuccessHCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessHCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
