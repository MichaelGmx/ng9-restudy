import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm4Component } from './simple-form4.component';

describe('SimpleForm4Component', () => {
  let component: SimpleForm4Component;
  let fixture: ComponentFixture<SimpleForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
