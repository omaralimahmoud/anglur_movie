import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviessevisesService {

  constructor(private _HttpClient:HttpClient) {
    
  }

   gettrending(medi:any):Observable<any>
   {
   
   
   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${medi}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
   }


    getmoviesdetils(id: any):Observable<any>
    {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=332f74f5e3c73bec7c7b6c0e3b8b7b4d&language=en-US`)
    }





  users:any=[
    {name:"omar",gender:"famle",age:33,date:"1/1/2000"},
    {name:"ali",gender:"male",age:39,date:"5/2/2000"},
    {name:"aya",gender:"famle",age:83,date:"3/1/2000"},
    {name:"body",gender:"male",age:27,date:"4/1/2000"},
  ]

 


  
}