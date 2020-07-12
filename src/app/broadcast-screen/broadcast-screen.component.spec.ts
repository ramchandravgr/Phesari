import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastScreenComponent } from './broadcast-screen.component';

describe('BroadcastScreenComponent', () => {
  let component: BroadcastScreenComponent;
  let fixture: ComponentFixture<BroadcastScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadcastScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadcastScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
