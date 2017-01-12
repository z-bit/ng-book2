/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicContactComponent } from './basic-contact.component';

describe('BasicContactComponent', () => {
  let component: BasicContactComponent;
  let fixture: ComponentFixture<BasicContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
