import { Component, OnInit } from '@angular/core';
import {Lesson} from '../../../../core/models/lesson';
import {ActivatedRoute, Router} from '@angular/router';
import {TimetableService} from '../../../../core/services/timetable.service';

@Component({
  selector: 'app-for-groups',
  templateUrl: './for-groups.component.html',
  styleUrls: ['./for-groups.component.css']
})
export class ForGroupsComponent implements OnInit {

  className: string;
  tmpLessonsByClassName: Lesson[] = Array();

  constructor(private route: ActivatedRoute, private router: Router, private timetableService: TimetableService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.className = params.id;
    });
    console.log(this.className);

    this.timetableService.findLessonsByClassName(this.className).subscribe( data => {
      this.tmpLessonsByClassName = data;
      console.log(data);
    });
  }

}
