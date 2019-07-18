import { Component, OnInit } from '@angular/core';
import {Class} from '../../../../../core/models/class';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../../../../core/services/form.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  class: Class;

  constructor(private route: ActivatedRoute, private router: Router, private formService: FormService) {
    this.class = new Class();
  }

  onSubmit() {
    this.formService.saveClass(this.class).subscribe(result => this.gotoLessonList());
  }

  gotoLessonList() {
    location.assign('/check');
  }

  ngOnInit() {
  }
}
