import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelClassComponent } from './del-class.component';

describe('DelClassComponent', () => {
  let component: DelClassComponent;
  let fixture: ComponentFixture<DelClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
