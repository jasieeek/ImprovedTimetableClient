import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Class} from '../models/class';
import {Teacher} from '../models/teacher';
import {Classroom} from '../models/classroom';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private classesUrl: string;
  private teachersUrl: string;
  private classroomsUrl: string;

  constructor(private http: HttpClient) {
    this.classesUrl = 'http://localhost:8080/group';
    this.teachersUrl = 'http://localhost:8080/teacher';
    this.classroomsUrl = 'http://localhost:8080/classroom';
  }

  public findAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.classesUrl);
  }

  public findAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teachersUrl);
  }

  public findAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomsUrl);
  }
}
