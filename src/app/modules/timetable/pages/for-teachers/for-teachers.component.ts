import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../../../core/models/lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {TimetableService} from '../../../../core/services/timetable.service';

@Component({
  selector: 'app-for-teachers',
  templateUrl: './for-teachers.component.html',
  styleUrls: ['./for-teachers.component.css']
})
export class ForTeachersComponent implements OnInit {

  teacherName: string;
  tmpLessonsByTeacherName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private timetableService: TimetableService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teacherName = params.id;
    });
    console.log(this.teacherName);

    this.timetableService.findLessonsByTeacherName(this.teacherName).subscribe( data => {
      this.tmpLessonsByTeacherName = data;
      console.log(data);
    });
  }


}
