import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsPreviewerComponent } from './designs-previewer.component';

describe('DesignsPreviewerComponent', () => {
  let component: DesignsPreviewerComponent;
  let fixture: ComponentFixture<DesignsPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
