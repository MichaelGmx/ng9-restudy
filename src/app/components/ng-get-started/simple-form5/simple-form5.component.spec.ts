import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleForm5Component } from './simple-form5.component';

describe('SimpleForm5Component', () => {
  let component: SimpleForm5Component;
  let fixture: ComponentFixture<SimpleForm5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleForm5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleForm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
