import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTeacherComponent} from './pages/teacher-form/pages/add-teacher/add-teacher.component';
import {FormComponent} from './form.component';
import {DelTeacherComponent} from './pages/teacher-form/pages/del-teacher/del-teacher.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FormComponent,
  //   children: [
  //     {
  //       path: 'add-teacher',
  //       component: AddTeacherComponent
  //     },
  //     {
  //       path: 'del-teacher',
  //       component: DelTeacherComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class FormRoutingModule { }
