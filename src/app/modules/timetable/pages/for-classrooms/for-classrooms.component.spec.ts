import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClassroomsComponent } from './for-classrooms.component';

describe('ForClassroomsComponent', () => {
  let component: ForClassroomsComponent;
  let fixture: ComponentFixture<ForClassroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForClassroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
