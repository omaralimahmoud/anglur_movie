import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navebare',
  templateUrl: './navebare.component.html',
  styleUrls: ['./navebare.component.css']
})
export class NavebareComponent implements OnInit {
  islogin: boolean = false
  constructor(private _AuthService:AuthService) {






    _AuthService.savecurent.subscribe (()=>{
     if(this._AuthService.savecurent.getValue()==null)
     {
        this.islogin=false
     }
    else
    {
      this.islogin=true
    }



    })
  }

      logout()
      {
        this._AuthService.logout()
      }

      

   

  ngOnInit(): void {
  }

}
