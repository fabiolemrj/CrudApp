import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramepageComponent } from './framepage.component';

describe('FramepageComponent', () => {
  let component: FramepageComponent;
  let fixture: ComponentFixture<FramepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
