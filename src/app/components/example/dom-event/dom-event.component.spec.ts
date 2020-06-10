import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomEventComponent } from './dom-event.component';

describe('DomEventComponent', () => {
  let component: DomEventComponent;
  let fixture: ComponentFixture<DomEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
