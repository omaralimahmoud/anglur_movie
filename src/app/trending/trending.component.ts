import { from } from 'rxjs';
import { Component, OnInit,OnDestroy } from '@angular/core';
import {MoviessevisesService} from './../moviessevises.service'
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit , OnDestroy {
   trnding:any[]=[];
   moviestv:any[]=[];
   tv:any[]=[];
   img4:any="https://image.tmdb.org/t/p/w500/";
   term:string="";
   chanalmovies:any;
   
   constructor(_trending:MoviessevisesService) { 
      
    this.trnding=   _trending.users
    this.chanalmovies=      _trending.gettrending('trending').subscribe((data)=>{
      this.moviestv=data.results.slice(0,10);
       },
       (error)=>{
   
       },
       
       ()=>{
   
       }
       
   
       
       
       )
       
           



       




      
         
             
  



      
       
  

       
  }
 


  ngOnDestroy()
  {
     console.log("good destroy")
     this.chanalmovies.unsubscribe()
  }
  
  ngOnInit(): void {
  }

}
