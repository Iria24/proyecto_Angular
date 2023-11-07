import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; // Importa la interfaz de producto

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {
  
  productos: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {  //aqui obtiene los datos de la api
    this.productService.findAll().subscribe(data => {
      this.productos = data;
    });
  }

  handleButtonClick(product: IProduct): void {
    // Aquí puedes manejar el clic en el botón.
    // Por ejemplo, podrías navegar a la página de detalles del producto.
    console.log(product);
  }
}