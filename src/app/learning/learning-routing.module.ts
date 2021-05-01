import { AndroidComponent } from './android/android.component';
import { FullsackComponent } from './fullsack/fullsack.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:"",component:FullsackComponent},
 {path:"android",component:AndroidComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
