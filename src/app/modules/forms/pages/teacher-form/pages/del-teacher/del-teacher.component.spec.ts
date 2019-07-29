import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTeacherComponent } from './del-teacher.component';

describe('DelTeacherComponent', () => {
  let component: DelTeacherComponent;
  let fixture: ComponentFixture<DelTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
