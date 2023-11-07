import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; // Importa la interfaz de producto

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.findAll().subscribe((data: IProduct[]) => {
      this.products = data;
    });
  }
}