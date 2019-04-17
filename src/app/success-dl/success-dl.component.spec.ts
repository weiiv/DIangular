import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDLComponent } from './success-dl.component';

describe('SuccessDLComponent', () => {
  let component: SuccessDLComponent;
  let fixture: ComponentFixture<SuccessDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
