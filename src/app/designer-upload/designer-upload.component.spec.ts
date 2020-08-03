import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerUploadComponent } from './designer-upload.component';

describe('DesignerUploadComponent', () => {
  let component: DesignerUploadComponent;
  let fixture: ComponentFixture<DesignerUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
