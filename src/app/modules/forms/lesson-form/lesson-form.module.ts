import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLessonComponent } from './pages/add-lesson/add-lesson.component';
import { DelLessonComponent } from './pages/del-lesson/del-lesson.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddLessonComponent, DelLessonComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LessonFormModule { }
