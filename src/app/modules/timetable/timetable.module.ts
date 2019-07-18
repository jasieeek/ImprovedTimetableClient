import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForGroupsComponent } from './pages/for-groups/for-groups.component';
import { ForTeachersComponent } from './pages/for-teachers/for-teachers.component';
import { ForClassroomsComponent } from './pages/for-classrooms/for-classrooms.component';
import {AppModule} from '../../app.module';
import {TeacherNamePipe} from '../../core/pipes/teacher-name.pipe';

@NgModule({
  declarations: [ForGroupsComponent, ForTeachersComponent, ForClassroomsComponent],
  exports: [
    ForGroupsComponent,
    ForTeachersComponent,
    ForClassroomsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class TimetableModule { }
