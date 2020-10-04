import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPortalComponent } from './sell-portal.component';

describe('SellPortalComponent', () => {
  let component: SellPortalComponent;
  let fixture: ComponentFixture<SellPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
