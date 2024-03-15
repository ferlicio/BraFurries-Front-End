import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header.component';



@NgModule({
  declarations: [
    HomeHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeHeaderComponent
  ]
})
export class HomeHeaderModule { }
