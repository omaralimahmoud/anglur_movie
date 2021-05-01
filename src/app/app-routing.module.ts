import { MoviedatilesComponent } from './moviedatiles/moviedatiles.component';
import { GurdgoodGuard } from './gurdgood.guard';
import { NavebareComponent } from './navebare/navebare.component';
import { Login33Component } from './login33/login33.component';
import { Register22Component } from './register22/register22.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrendingComponent } from './trending/trending.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:"navebare",component:NavebareComponent},
  {path:"",redirectTo:"register22",pathMatch:"full"},
  {path:"moviedatiles/:id",component:MoviedatilesComponent},
  {path:"about",canActivate:[GurdgoodGuard]  , component:AboutComponent},
  {path:"trending",canActivate:[GurdgoodGuard] ,  component:TrendingComponent},
  {path:"register22",component:Register22Component},

  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  },

  {path:"login33",component:Login33Component},
  {path:"**",component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
