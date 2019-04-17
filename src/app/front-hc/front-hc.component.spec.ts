import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontHCComponent } from './front-hc.component';

describe('FrontHCComponent', () => {
  let component: FrontHCComponent;
  let fixture: ComponentFixture<FrontHCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontHCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
