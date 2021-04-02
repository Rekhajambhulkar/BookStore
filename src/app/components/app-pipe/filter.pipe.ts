import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchItem: any[]): any {
     return value.filter(function(search){
       return search.bookName.toLowerCase().indexOf(searchItem) > -1;
     })
  }
}
