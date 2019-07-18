import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGroupsComponent } from './for-groups.component';

describe('ForGroupsComponent', () => {
  let component: ForGroupsComponent;
  let fixture: ComponentFixture<ForGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
