import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {FormRoutingModule} from './form-routing.module';
import {AddTeacherComponent} from './pages/teacher-form/pages/add-teacher/add-teacher.component';
import {TeacherFormModule} from './pages/teacher-form/teacher-form.module';
import {ClassFormModule} from './pages/class-form/class-form.module';
import {LessonFormModule} from './pages/lesson-form/lesson-form.module';
import {ClassroomFormModule} from './pages/classroom-form/classroom-form.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ClassFormModule,
    ClassroomFormModule,
    LessonFormModule,
    TeacherFormModule
  ]
})
export class FormModule { }
