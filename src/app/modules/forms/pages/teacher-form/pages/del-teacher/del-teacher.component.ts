import { Component, OnInit } from '@angular/core';
import {Teacher} from '../../../../../../core/models/teacher';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-del-teacher',
  templateUrl: './del-teacher.component.html',
  styleUrls: ['./del-teacher.component.css']
})
export class DelTeacherComponent implements OnInit {

  teachers: Teacher[];
  teacherId: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    console.log('ID:' + this.teacherId);
    this.formService.deleteTeacher(this.teacherId).subscribe( result  => this.goToCheck());
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
