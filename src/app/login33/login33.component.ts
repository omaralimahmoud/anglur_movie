import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login33',
  templateUrl: './login33.component.html',
  styleUrls: ['./login33.component.css']
})
export class Login33Component implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { }
  error1:string="";
   loginForm :any =new FormGroup({
     email:new FormControl(null,[Validators.required,Validators.email]),
     password:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9]{5,10}$")])
   })
    
   sumbitForm(formsumbit:any)
   {
   
   this._AuthService.loginGoodData(formsumbit.value).subscribe((res)=>{
    
     if(res.message === "success")
     {
       
       localStorage.setItem("userData",res.token);
       this._AuthService.saveDateUser();
       this._Router.navigate(['/trending']);
     }
     else
     {
       this.error1 =res.message;
     }

   })
   }




  ngOnInit(): void {
  }

}
