import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSellingComponent } from './about-selling.component';

describe('AboutSellingComponent', () => {
  let component: AboutSellingComponent;
  let fixture: ComponentFixture<AboutSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
