import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../../../../../core/models/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../../../../../core/services/form.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  classroom: Classroom;

  constructor(private route: ActivatedRoute, private router: Router, private formService: FormService) {
    this.classroom = new Classroom();
  }

  onSubmit() {
    this.formService.saveClassroom(this.classroom).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
  }

}
