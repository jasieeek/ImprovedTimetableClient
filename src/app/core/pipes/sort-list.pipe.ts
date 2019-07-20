import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): Array<any> {
    return array.sort();
  }

}
