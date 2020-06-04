import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm1Component } from './simple-form1.component';

describe('SimpleForm1Component', () => {
  let component: SimpleForm1Component;
  let fixture: ComponentFixture<SimpleForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
