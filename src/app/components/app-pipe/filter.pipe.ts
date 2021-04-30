import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchItem: string): any[] {
   
    console.log("search", searchItem);

    if (!value) return [];
    if (!searchItem) return value;
    searchItem = searchItem.toLowerCase();
    return value.filter( it => {
      return it.bookName.toLowerCase().includes(searchItem);
    }); 
  }
}
