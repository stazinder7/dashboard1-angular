import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FiltersPipe implements PipeTransform {
  transform(value: any, filtertext: string) {
    if (value.length === 0 || filtertext === '') {
      return value;
    }
    const font_dropdown = [];
    for (const items1 of value) {
      if (items1.includes(filtertext)) {
        font_dropdown.push(items1);
      }
    }
    console.log(font_dropdown, 'pipe');
    return font_dropdown;
  }
}
