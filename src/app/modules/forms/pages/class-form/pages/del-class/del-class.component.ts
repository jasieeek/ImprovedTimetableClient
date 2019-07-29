import { Component, OnInit } from '@angular/core';
import {Class} from '../../../../../../core/models/class';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from '../../../../../../core/services/form.service';
import {MenuService} from '../../../../../../core/services/menu.service';

@Component({
  selector: 'app-del-class',
  templateUrl: './del-class.component.html',
  styleUrls: ['./del-class.component.css']
})
export class DelClassComponent implements OnInit {

  classes: Class[];
  classId: string;

  constructor(private formService: FormService, private menuService: MenuService) {
  }

  onSubmit() {
    this.formService.deleteClass(this.classId).subscribe( result => this.goToCheck());
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
