import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrSelectComponent } from './attr-select.component';

describe('AttrSelectComponent', () => {
  let component: AttrSelectComponent;
  let fixture: ComponentFixture<AttrSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
