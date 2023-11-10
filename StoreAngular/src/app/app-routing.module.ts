import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoDetailComponent } from './productos/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './productos/producto-edit/producto-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/:id', component: ProductoDetailComponent },
  { path: 'productos/edit/:id', component: ProductoEditComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }