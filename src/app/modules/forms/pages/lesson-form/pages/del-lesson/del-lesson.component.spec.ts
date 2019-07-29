import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelLessonComponent } from './del-lesson.component';

describe('DelLessonComponent', () => {
  let component: DelLessonComponent;
  let fixture: ComponentFixture<DelLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
