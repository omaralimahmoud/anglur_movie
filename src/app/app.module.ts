import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { TrendingComponent } from './trending/trending.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloPipe } from './hello.pipe';
import { GenderPipe } from './gender.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Register22Component } from './register22/register22.component';
import { Login33Component } from './login33/login33.component';
import { NavebareComponent } from './navebare/navebare.component';
import { MoviedatilesComponent } from './moviedatiles/moviedatiles.component';



@NgModule({
  declarations: [
    AppComponent,
    
    AboutComponent,
    
    TrendingComponent,
    NotfoundComponent,
    HelloPipe,
    GenderPipe,
    SearchPipe,
    Register22Component,
    Login33Component,
    NavebareComponent,
    MoviedatilesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
