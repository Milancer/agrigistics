import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.toLowerCase() == "production"){
      return "settings"
    } else {
      return "place"
    }
  }

}
