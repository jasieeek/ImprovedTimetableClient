import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../../../../core/models/teacher';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teachers: Teacher[];
  teacherId: string;
  newTeacherName: string;
  newTeacherSurname: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    let newTeacher = new Teacher();
    newTeacher.name = this.newTeacherName;
    newTeacher.surname = this.newTeacherSurname;
    this.formService.editTeacher(newTeacher, this.teacherId).subscribe( result  => this.goToCheck());
  }

  goToCheck() {
    location.assign('/check');
  }

  ngOnInit() {
    this.menuService.findAllTeachers().subscribe( data => {
      this.teachers = data;
    });
  }

}
