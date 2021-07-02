import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmaskComponent } from './inputmask.component';

describe('InputmaskComponent', () => {
  let component: InputmaskComponent;
  let fixture: ComponentFixture<InputmaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputmaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
