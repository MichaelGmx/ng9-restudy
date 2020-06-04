import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm8Component } from './simple-form8.component';

describe('SimpleForm8Component', () => {
  let component: SimpleForm8Component;
  let fixture: ComponentFixture<SimpleForm8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
