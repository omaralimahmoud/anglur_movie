import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register22',
  templateUrl: './register22.component.html',
  styleUrls: ['./register22.component.css']
})

export class Register22Component implements OnInit {

  errorMessage:string = ""
  constructor(private _AuthService:AuthService,private _Router:Router) { }
  registerForm:any = new FormGroup({
    first_name: new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    age : new FormControl(null , [Validators.required , Validators.min(15) , Validators.max(90)]),
    email: new FormControl (null , [Validators.required , Validators.email]),
    password: new FormControl (null , [Validators.required , Validators.pattern("^[a-z0-9]{5,10}$")])
  })
  
  sumbitForm(registerInfo:any){
   this._AuthService.register(registerInfo.value).subscribe((response)=>{
     console.log("registerInfo.value")
     if(response.message === "success"){
       this._Router.navigate(['/login33']);
     }
     else{
       this.errorMessage = response.message;
     }
   })

  }
  ngOnInit(): void {
  }

}