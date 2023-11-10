import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    UserDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserModule { }