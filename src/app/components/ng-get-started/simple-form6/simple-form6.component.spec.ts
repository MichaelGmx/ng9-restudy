import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm6Component } from './simple-form6.component';

describe('SimpleForm6Component', () => {
  let component: SimpleForm6Component;
  let fixture: ComponentFixture<SimpleForm6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
