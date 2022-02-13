import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateStringFormatter'
})
export class DateStringFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      return value.split("T")[0]
    }
  }

}
