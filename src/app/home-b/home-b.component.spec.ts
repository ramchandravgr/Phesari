import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBComponent } from './home-b.component';

describe('HomeBComponent', () => {
  let component: HomeBComponent;
  let fixture: ComponentFixture<HomeBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
