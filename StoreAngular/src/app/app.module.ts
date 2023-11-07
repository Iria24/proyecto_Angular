import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductsModule } from './productos/productos.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    // ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ProductsModule,
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }