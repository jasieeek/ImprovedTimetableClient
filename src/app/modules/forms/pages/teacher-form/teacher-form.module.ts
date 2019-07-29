import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './pages/add-teacher/add-teacher.component';
import { DelTeacherComponent } from './pages/del-teacher/del-teacher.component';
import {FormsModule} from '@angular/forms';
import { EditTeacherComponent } from './pages/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [AddTeacherComponent, DelTeacherComponent, EditTeacherComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TeacherFormModule { }
