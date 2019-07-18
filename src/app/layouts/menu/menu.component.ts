import { Component, OnInit } from '@angular/core';
import {Class} from '../../core/models/class';
import {Teacher} from '../../core/models/teacher';
import {Classroom} from '../../core/models/classroom';
import {MenuService} from '../../core/services/menu.service';
import {AuthenticationService} from '../../core/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  classes: Class[];
  teachers: Teacher[];
  classrooms: Classroom[];

  constructor(private menuService: MenuService, private authService: AuthenticationService) { }

  // tslint:disable-next-line:ban-types
  toTimetableByClassName(className: String) {
    // this.router.navigate(['/timetable/classname', className]);
    // @ts-ignore
    location.assign(['timetable/classname/' + className]);
  }
  // tslint:disable-next-line:ban-types
  toTimetableByTeacherName(teacherName: String, teacherSurname: String) {
    // tslint:disable-next-line:ban-types
    let tmpTeacher: String = '';
    tmpTeacher += teacherName.toString();
    tmpTeacher += '-';
    tmpTeacher += teacherSurname.toString();
    // this.router.navigate(['/timetable/teacher', tmpTeacher]);
    // @ts-ignore
    location.assign(['timetable/teacher/' + tmpTeacher]);
  }
  // tslint:disable-next-line:ban-types
  toTimetableByClassroomName(classroomName: String) {
    // this.router.navigate(['/timetable/classroom', classroomName]);
    // @ts-ignore
    location.assign(['timetable/classroom/' + classroomName]);
  }

  ngOnInit() {
    this.menuService.findAllClasses().subscribe( data => {
      this.classes = data;
    });
    this.menuService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
    this.menuService.findAllClassrooms().subscribe( data => {
      this.classrooms = data;
    });
  }

}
