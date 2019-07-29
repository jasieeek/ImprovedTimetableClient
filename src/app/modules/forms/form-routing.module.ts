import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTeacherComponent} from './pages/teacher-form/pages/add-teacher/add-teacher.component';
import {FormComponent} from './form.component';
import {DelTeacherComponent} from './pages/teacher-form/pages/del-teacher/del-teacher.component';
import {AddLessonComponent} from './pages/lesson-form/pages/add-lesson/add-lesson.component';
import {DelLessonComponent} from './pages/lesson-form/pages/del-lesson/del-lesson.component';
import {AddClassComponent} from './pages/class-form/pages/add-class/add-class.component';
import {DelClassComponent} from './pages/class-form/pages/del-class/del-class.component';
import {AddClassroomComponent} from './pages/classroom-form/pages/add-classroom/add-classroom.component';
import {DelClassroomComponent} from './pages/classroom-form/pages/del-classroom/del-classroom.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class FormRoutingModule { }
