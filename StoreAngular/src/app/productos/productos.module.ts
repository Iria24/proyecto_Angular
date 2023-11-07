import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductDetailComponent } from './producto-detail/producto-detail.component';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductoEditComponent,
    ProductoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }