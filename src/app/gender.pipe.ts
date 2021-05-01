import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:string ,gender:string): any  {
      if(gender=="male")
    {
      return" mr"+name
    }
    else
    {
      return "ms"+name
    }
  }

}
