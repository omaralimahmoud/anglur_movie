import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(moviess:any[], term:any):any[] {
            
   return moviess.filter((movies)=> {

    if(movies.title != undefined)
    {
       
      return movies.title.toLowerCase().includes(term.toLowerCase())

    }
    else
    {
       return movies.name.toLowerCase().includes(term.toLowerCase())
    }

    





   })
  }

}
