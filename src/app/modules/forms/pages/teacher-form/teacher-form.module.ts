import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { DelTeacherComponent } from './pages/del-teacher/del-teacher.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddTeacherComponent, DelTeacherComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TeacherFormModule { }
