import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Lesson} from '../models/lesson';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private classLessonsUrl: string;
  private teacherLessonsUrl: string;
  private classroomLessonsUrl: string;

  constructor(private http: HttpClient) {
    this.classLessonsUrl = 'http://localhost:8080/timetable/classname';
    this.teacherLessonsUrl = 'http://localhost:8080/timetable/teacher';
    this.classroomLessonsUrl = 'http://localhost:8080/timetable/classroom';
  }

  public findLessonsByClassName(className: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.classLessonsUrl + '/' + className);
  }
  public findLessonsByTeacherName(teacherName: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.teacherLessonsUrl + '/' + teacherName);
  }
  public findLessonsByClassroomName(classroomName: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.classroomLessonsUrl + '/' + classroomName);
  }
}
