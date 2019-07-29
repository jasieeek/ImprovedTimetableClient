import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacherNameToUrl'
})
export class TeacherNameToUrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    const splited = value.split(' ', 2);
    return splited[0] + '-' + splited[1];
  }
}
