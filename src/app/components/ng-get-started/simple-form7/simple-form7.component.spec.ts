import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm7Component } from './simple-form7.component';

describe('SimpleForm7Component', () => {
  let component: SimpleForm7Component;
  let fixture: ComponentFixture<SimpleForm7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
