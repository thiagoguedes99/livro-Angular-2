import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4Component } from './angular4.component';

describe('Angular4Component', () => {
  let component: Angular4Component;
  let fixture: ComponentFixture<Angular4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
