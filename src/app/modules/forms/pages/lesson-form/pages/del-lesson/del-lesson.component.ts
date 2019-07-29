import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../../../../../core/models/lesson';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-del-lesson',
  templateUrl: './del-lesson.component.html',
  styleUrls: ['./del-lesson.component.css']
})
export class DelLessonComponent implements OnInit {

  lessons: Lesson[];
  lessonId: string;

  constructor(private formService: FormService) {
  }

  onSubmit() {
    console.log(this.lessonId);
    this.formService.deleteLesson(this.lessonId).subscribe( result => this.goToCheck());
  }

  goToCheck() {
    location.assign('/check');
  }

  ngOnInit() {
    this.formService.findAllLessons().subscribe( data => {
      this.lessons = data;
    });
  }

}
