import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { DelClassComponent } from './pages/del-class/del-class.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddClassComponent, DelClassComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClassFormModule { }
