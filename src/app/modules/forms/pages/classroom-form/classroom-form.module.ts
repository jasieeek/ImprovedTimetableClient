import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassroomComponent } from './pages/add-classroom/add-classroom.component';
import { DelClassroomComponent } from './pages/del-classroom/del-classroom.component';
import {FormsModule} from '@angular/forms';
import { EditClassroomComponent } from './pages/edit-classroom/edit-classroom.component';

@NgModule({
  declarations: [AddClassroomComponent, DelClassroomComponent, EditClassroomComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClassroomFormModule { }
