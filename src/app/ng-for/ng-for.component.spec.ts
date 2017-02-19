/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgForComponent } from './ng-for.component';

describe('NgForComponent', () => {
  let component: NgForComponent;
  let fixture: ComponentFixture<NgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
