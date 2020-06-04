import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm3Component } from './simple-form3.component';

describe('SimpleForm3Component', () => {
  let component: SimpleForm3Component;
  let fixture: ComponentFixture<SimpleForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
