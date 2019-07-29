import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../../../../../core/models/lesson';
import {Class} from '../../../../../../core/models/class';
import {Classroom} from '../../../../../../core/models/classroom';
import {Teacher} from '../../../../../../core/models/teacher';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {

  lesson: Lesson;
  classes: Class[];
  classrooms: Classroom[];
  teachers: Teacher[];

  constructor(private formService: FormService, private menuService: MenuService) {
    this.lesson = new Lesson();
  }

  onSubmit() {
    this.formService.saveLesson(this.lesson).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
    this.menuService.findAllClasses().subscribe(data => {
      this.classes = data;
    });
    this.menuService.findAllClassrooms().subscribe( data => {
      this.classrooms = data;
    });
    this.menuService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
  }

}
