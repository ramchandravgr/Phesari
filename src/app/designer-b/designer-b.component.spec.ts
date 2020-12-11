import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerBComponent } from './designer-b.component';

describe('DesignerBComponent', () => {
  let component: DesignerBComponent;
  let fixture: ComponentFixture<DesignerBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
