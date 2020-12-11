import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutlineComponent } from './new-outline.component';

describe('NewOutlineComponent', () => {
  let component: NewOutlineComponent;
  let fixture: ComponentFixture<NewOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
