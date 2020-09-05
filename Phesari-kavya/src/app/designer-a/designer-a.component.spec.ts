import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerAComponent } from './designer-a.component';

describe('DesignerAComponent', () => {
  let component: DesignerAComponent;
  let fixture: ComponentFixture<DesignerAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
