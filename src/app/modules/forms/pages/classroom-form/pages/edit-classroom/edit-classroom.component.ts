import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../../../../../core/models/classroom';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css']
})
export class EditClassroomComponent implements OnInit {

  classrooms: Classroom[];
  classroomId: string;
  newClassroomName: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    let newClassroom = new Classroom();
    newClassroom.id = this.classroomId;
    newClassroom.name = this.newClassroomName;
    this.formService.editClassroom(newClassroom, this.classroomId).subscribe( result => this.goToCheck());
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
