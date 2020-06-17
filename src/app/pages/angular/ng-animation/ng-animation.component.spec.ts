import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAnimationComponent } from './ng-animation.component';

describe('NgAnimationComponent', () => {
  let component: NgAnimationComponent;
  let fixture: ComponentFixture<NgAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
