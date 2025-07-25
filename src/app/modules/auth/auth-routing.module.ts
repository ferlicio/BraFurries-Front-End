import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { 
    path: '',
      children: [
        {
          path: '',
          component: LoginComponent
        },
        {
          path: 'auth',
          component: AuthComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
