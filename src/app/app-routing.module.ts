import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './layouts/content/content.component';
import {FormComponent} from './modules/forms/form.component';
import {AddTeacherComponent} from './modules/forms/pages/teacher-form/pages/add-teacher/add-teacher.component';
import {DelTeacherComponent} from './modules/forms/pages/teacher-form/pages/del-teacher/del-teacher.component';
import {ForGroupsComponent} from './modules/timetable/pages/for-groups/for-groups.component';
import {ForTeachersComponent} from './modules/timetable/pages/for-teachers/for-teachers.component';
import {ForClassroomsComponent} from './modules/timetable/pages/for-classrooms/for-classrooms.component';
import {LoginFormComponent} from './modules/login/pages/login-form/login-form.component';
import {LogoutComponent} from './modules/login/pages/logout/logout.component';
import {AddClassComponent} from './modules/forms/pages/class-form/pages/add-class/add-class.component';
import {DelClassComponent} from './modules/forms/pages/class-form/pages/del-class/del-class.component';
import {AddLessonComponent} from './modules/forms/pages/lesson-form/pages/add-lesson/add-lesson.component';
import {DelLessonComponent} from './modules/forms/pages/lesson-form/pages/del-lesson/del-lesson.component';
import {AddClassroomComponent} from './modules/forms/pages/classroom-form/pages/add-classroom/add-classroom.component';
import {DelClassroomComponent} from './modules/forms/pages/classroom-form/pages/del-classroom/del-classroom.component';
import {EditClassComponent} from './modules/forms/pages/class-form/pages/edit-class/edit-class.component';
import {EditClassroomComponent} from './modules/forms/pages/classroom-form/pages/edit-classroom/edit-classroom.component';
import {EditTeacherComponent} from './modules/forms/pages/teacher-form/pages/edit-teacher/edit-teacher.component';


const parentModuleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'timetable/classname/1I',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'timetable/classname/:id',
        component: ForGroupsComponent
      },
      {
        path: 'timetable/teacher/:id',
        component: ForTeachersComponent
      },
      {
        path: 'timetable/classroom/:id',
        component: ForClassroomsComponent
      },
      {
        path: 'form',
        component: FormComponent,
        children: [
          {
            path: 'add-lesson',
            component: AddLessonComponent
          },
          {
            path: 'del-lesson',
            component: DelLessonComponent
          },
          {
            path: 'add-class',
            component: AddClassComponent
          },
          {
            path: 'del-class',
            component: DelClassComponent
          },
          {
            path: 'edit-class',
            component: EditClassComponent
          },
          {
            path: 'add-teacher',
            component: AddTeacherComponent
          },
          {
            path: 'del-teacher',
            component: DelTeacherComponent
          },
          {
            path: 'edit-teacher',
            component: EditTeacherComponent
          },
          {
            path: 'add-classroom',
            component: AddClassroomComponent
          },
          {
            path: 'del-classroom',
            component: DelClassroomComponent
          },
          {
            path: 'edit-classroom',
            component: EditClassroomComponent
          }
        ]
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(parentModuleRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
