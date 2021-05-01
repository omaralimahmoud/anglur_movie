import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot,  UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GurdgoodGuard implements CanActivate {
  constructor(private _AuthService:AuthService,private _Router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._AuthService.savecurent.getValue()==null)
      {
        this._Router.navigate(['/login33'])
        return false

       
      }
      else
      {
        return true;
      }
    
  }
  
}
