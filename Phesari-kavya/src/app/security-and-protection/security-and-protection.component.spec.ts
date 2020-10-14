import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndProtectionComponent } from './security-and-protection.component';

describe('SecurityAndProtectionComponent', () => {
  let component: SecurityAndProtectionComponent;
  let fixture: ComponentFixture<SecurityAndProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityAndProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityAndProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
