import { MoviessevisesService } from './../moviessevises.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedatiles',
  templateUrl: './moviedatiles.component.html',
  styleUrls: ['./moviedatiles.component.css']
})
export class MoviedatilesComponent implements OnInit {
   parmtermovie:any
   movieData:any
   imgprifx:string="https://image.tmdb.org/t/p/w500/"
   
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviessevisesService:MoviessevisesService) { 
  this.parmtermovie= this._ActivatedRoute.snapshot.params.id
  this._MoviessevisesService.getmoviesdetils(this.parmtermovie).subscribe((data)=>{
   this.movieData=data
  })
  }

  ngOnInit(): void {
  }

}
