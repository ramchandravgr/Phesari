import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsDisplayComponent } from './designs-display.component';

describe('DesignsDisplayComponent', () => {
  let component: DesignsDisplayComponent;
  let fixture: ComponentFixture<DesignsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
