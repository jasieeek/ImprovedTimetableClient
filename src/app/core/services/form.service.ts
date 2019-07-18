import { Injectable } from '@angular/core';
import {Teacher} from '../models/teacher';
import {Classroom} from '../models/classroom';
import {Lesson} from '../models/lesson';
import {Class} from '../models/class';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private timetableUrl: string;
  private delLessonsUrl: string;
  private teachersUrl: string;
  private delTeachersUrl: string;
  private classroomsUrl: string;
  private delClassroomsUrl: string;
  private classesUrl: string;
  private delClassesUrl: string;

  constructor(private http: HttpClient) {
    this.timetableUrl = 'http://localhost:8080/timetable';
    this.delLessonsUrl = 'http://localhost:8080/timetable/del';
    this.teachersUrl = 'http://localhost:8080/teacher';
    this.delTeachersUrl = 'http://localhost:8080/teacher/del';
    this.classroomsUrl = 'http://localhost:8080/classroom';
    this.delClassroomsUrl = 'http://localhost:8080/classroom/del';
    this.classesUrl = 'http://localhost:8080/group';
    this.delClassesUrl = 'http://localhost:8080/group/del';
  }

  public saveLesson(lesson: Lesson) {
    return this.http.post<Lesson>(this.timetableUrl, lesson);
  }

  public deleteLesson(id: string) {
    return this.http.delete(this.delLessonsUrl + '/' + id);
  }

  public saveClass(group: Class) {
    return this.http.post<Class>(this.classesUrl, group);
  }

  public deleteClass(id: string) {
    return this.http.delete(this.delClassesUrl + '/' + id);
  }

  public saveTeacher(teacher: Teacher) {
    return this.http.post<Teacher>(this.teachersUrl, teacher);
  }

  public deleteTeacher(id: string) {
    return this.http.delete(this.delTeachersUrl + '/' + id);
  }

  public saveClassroom(classroom: Classroom) {
    return this.http.post<Classroom>(this.classroomsUrl, classroom);
  }

  public deleteClassroom(id: string) {
    return this.http.delete(this.delClassroomsUrl + '/' + id);
  }

  public findAllLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.timetableUrl);
  }
}
