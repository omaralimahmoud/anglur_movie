import { Component, OnInit } from '@angular/core';
import{MoviessevisesService} from './../moviessevises.service'








@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutUsers:any[]=[]
  
   
  constructor(_movies:MoviessevisesService) { 
   
  this.aboutUsers=  _movies.users
  
  }

  ngOnInit(): void {
  }

}
