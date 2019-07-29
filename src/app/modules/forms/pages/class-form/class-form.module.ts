import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { DelClassComponent } from './pages/del-class/del-class.component';
import {FormsModule} from '@angular/forms';
import { EditClassComponent } from './pages/edit-class/edit-class.component';

@NgModule({
  declarations: [AddClassComponent, DelClassComponent, EditClassComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClassFormModule { }
