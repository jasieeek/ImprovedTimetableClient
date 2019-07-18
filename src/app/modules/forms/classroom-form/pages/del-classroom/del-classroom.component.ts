import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../../../../core/models/classroom';
import {FormService} from '../../../../../core/services/form.service';
import {MenuService} from '../../../../../core/services/menu.service';

@Component({
  selector: 'app-del-classroom',
  templateUrl: './del-classroom.component.html',
  styleUrls: ['./del-classroom.component.css']
})
export class DelClassroomComponent implements OnInit {
  classrooms: Classroom[];
  classroomId: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    console.log(this.classroomId);
    this.formService.deleteClassroom(this.classroomId).subscribe( result => this.goToCheck());
  }

  goToCheck() {
    location.assign('/check');
  }

  ngOnInit() {
    this.menuService.findAllClassrooms().subscribe( data => {
      this.classrooms = data;
    });
  }

}
