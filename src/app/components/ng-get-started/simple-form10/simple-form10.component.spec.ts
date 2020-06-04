import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm10Component } from './simple-form10.component';

describe('SimpleForm10Component', () => {
  let component: SimpleForm10Component;
  let fixture: ComponentFixture<SimpleForm10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
