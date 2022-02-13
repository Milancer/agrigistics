import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDecimal'
})
export class RemoveDecimalPipe implements PipeTransform {

  transform(value: number): number {
    if(value){
      return Math.ceil(value)
    }
  }

}
