import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import {FormRoutingModule} from './form-routing.module';
import {AddTeacherComponent} from './teacher-form/pages/add-teacher/add-teacher.component';
import {TeacherFormModule} from './teacher-form/teacher-form.module';
import {ClassFormModule} from './class-form/class-form.module';
import {LessonFormModule} from './lesson-form/lesson-form.module';
import {ClassroomFormModule} from './classroom-form/classroom-form.module';
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
