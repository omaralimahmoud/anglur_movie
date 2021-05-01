import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) {

     if(localStorage.getItem("userData"))
     {
       this.saveDateUser()
     }

   } 
  savecurent: any= new BehaviorSubject( null )

  register(formData:any):Observable<any> {
    
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" , formData)
        
   }
  loginGoodData(dataTo:any):Observable<any>
  {
    return   this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin",dataTo)

  }

  saveDateUser()
  {
    let encodeToken:any =localStorage.getItem("userData");
    let decodeToken=jwtDecode(encodeToken);
    console.log(decodeToken);
    this.savecurent.next(decodeToken)
  }
   logout()
   {
    this.savecurent.next(null)
    localStorage.removeItem("userData");
    this._Router.navigate(['login33']);
  
   }

   





}
