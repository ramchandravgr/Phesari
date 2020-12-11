import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSellingComponent } from './start-selling.component';

describe('StartSellingComponent', () => {
  let component: StartSellingComponent;
  let fixture: ComponentFixture<StartSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
