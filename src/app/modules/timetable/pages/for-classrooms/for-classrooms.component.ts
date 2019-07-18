import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../../../core/services/timetable.service';
import {Lesson} from '../../../../core/models/lesson';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-for-classrooms',
  templateUrl: './for-classrooms.component.html',
  styleUrls: ['./for-classrooms.component.css']
})
export class ForClassroomsComponent implements OnInit {
  classroomName: string;
  tmpLessonsByClassroomName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private timetableService: TimetableService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.classroomName = params.id;
    });
    console.log(this.classroomName);

    this.timetableService.findLessonsByClassroomName(this.classroomName).subscribe( data => {
      this.tmpLessonsByClassroomName = data;
      console.log(data);
    });
  }
}
