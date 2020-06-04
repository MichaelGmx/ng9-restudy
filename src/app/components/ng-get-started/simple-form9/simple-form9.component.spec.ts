import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm9Component } from './simple-form9.component';

describe('SimpleForm9Component', () => {
  let component: SimpleForm9Component;
  let fixture: ComponentFixture<SimpleForm9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
