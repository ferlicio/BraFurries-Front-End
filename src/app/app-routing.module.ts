import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'sobre', loadChildren: () => import('./modules/home/pages/sobre-nos/sobre-nos.module').then(m => m.SobreNosModule) },
  { path: 'eventos', loadChildren: () => import('./modules/home/pages/eventos/eventos.module').then(m => m.EventosModule) },
  { path: 'contato', loadChildren: () => import('./modules/home/pages/contato/contato.module').then(m => m.ContatoModule) },
  { path: 'login', loadChildren: () => import('./modules/auth/modules/login/login.module').then(m => m.LoginModule) },
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'membro', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 
  },
  { 
    path: '**', 
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
