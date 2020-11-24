import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularxQrcodeComponent } from './angularx-qrcode.component';

describe('AngularxQrcodeComponent', () => {
  let component: AngularxQrcodeComponent;
  let fixture: ComponentFixture<AngularxQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularxQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularxQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
