import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './../app/productos/producto-list/producto-list.component';
import { ProductoDetailComponent } from './../app/productos/producto-detail/producto-detail.component';
import { ProductoEditComponent } from './../app/productos/producto-edit/producto-edit.component';

const routes: Routes = [
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/:id', component: ProductoDetailComponent },
  { path: 'productos/edit/:id', component: ProductoEditComponent },
  // otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }