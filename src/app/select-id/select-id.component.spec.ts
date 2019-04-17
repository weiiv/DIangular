import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIDComponent } from './select-id.component';

describe('SelectIDComponent', () => {
  let component: SelectIDComponent;
  let fixture: ComponentFixture<SelectIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
