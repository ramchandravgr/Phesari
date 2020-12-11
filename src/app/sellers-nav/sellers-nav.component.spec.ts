import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersNavComponent } from './sellers-nav.component';

describe('SellersNavComponent', () => {
  let component: SellersNavComponent;
  let fixture: ComponentFixture<SellersNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
