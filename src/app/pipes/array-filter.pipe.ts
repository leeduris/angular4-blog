import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {
  transform(items: any[], field : string, value : string): any[] {
    if(value ==null) return items;
    return items.filter(item => item[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
}
