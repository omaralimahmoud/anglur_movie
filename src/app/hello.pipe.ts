import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipe implements PipeTransform {

  transform(usere:string): any {
    return "hello"+usere
  }

}
