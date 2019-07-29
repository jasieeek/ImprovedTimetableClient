import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForGroupsComponent } from './pages/for-groups/for-groups.component';
import { ForTeachersComponent } from './pages/for-teachers/for-teachers.component';
import { ForClassroomsComponent } from './pages/for-classrooms/for-classrooms.component';
import { TeacherNameToUrlPipe } from './pipe/teacher-name-to-url.pipe';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [ForGroupsComponent, ForTeachersComponent, ForClassroomsComponent, TeacherNameToUrlPipe],
  exports: [
    ForGroupsComponent,
    ForTeachersComponent,
    ForClassroomsComponent,
    TeacherNameToUrlPipe,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,

  ],
  providers: []
})
export class TimetableModule { }
