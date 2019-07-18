import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../../../core/models/teacher';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../../../../core/services/form.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacher: Teacher;

  constructor(private route: ActivatedRoute, private router: Router, private formService: FormService) {
    this.teacher = new Teacher();
  }

  onSubmit() {
    this.formService.saveTeacher(this.teacher).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
  }

}
