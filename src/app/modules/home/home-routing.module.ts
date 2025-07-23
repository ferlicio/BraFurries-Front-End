import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutComponent } from '../../core/layout/layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'sobre-nos',
        component: SobreNosComponent
      },
      {
        path: 'eventos',
        component: EventosComponent
      },
      {
        path: 'contato',
        component: ContatoComponent
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
