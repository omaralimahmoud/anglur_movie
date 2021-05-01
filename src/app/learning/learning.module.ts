import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { FullsackComponent } from './fullsack/fullsack.component';
import { AndroidComponent } from './android/android.component';


@NgModule({
  declarations: [FullsackComponent, AndroidComponent],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
