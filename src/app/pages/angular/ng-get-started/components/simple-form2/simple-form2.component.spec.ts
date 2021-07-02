import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm2Component } from './simple-form2.component';

describe('SimpleForm2Component', () => {
  let component: SimpleForm2Component;
  let fixture: ComponentFixture<SimpleForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
