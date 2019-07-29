import { Component, OnInit } from '@angular/core';
import {Class} from '../../../../../../core/models/class';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  classes: Class[];
  classId: string;
  newClassId: string;
  newClassName: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    let newClass = new Class();
    newClass.id = this.classId;
    newClass.name = this.newClassName;
    this.formService.editClass(newClass, this.classId).subscribe( result => this.goToCheck());
  }

  goToCheck() {
    location.assign('/check');
  }

  ngOnInit() {
    this.menuService.findAllClasses().subscribe( data => {
      this.classes = data;
    });
  }
}
