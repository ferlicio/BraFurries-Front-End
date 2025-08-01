import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { WidgetsModule } from "../../widgets/widgets.module";
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule,
    WidgetsModule
]
})
export class AuthModule { }
