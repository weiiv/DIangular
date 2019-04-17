import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDLComponent } from './front-dl.component';

describe('FrontDLComponent', () => {
  let component: FrontDLComponent;
  let fixture: ComponentFixture<FrontDLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
