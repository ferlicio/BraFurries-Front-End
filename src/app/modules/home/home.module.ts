import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SobreNosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    WidgetsModule,
  ]
})
export class HomeModule { }