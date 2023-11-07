import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoListComponent } from './producto-list/producto-list.component';



@NgModule({
  declarations: [
    ProductoDetailComponent,
    ProductoEditComponent,
    ProductoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
