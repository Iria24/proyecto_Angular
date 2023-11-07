import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; // Importa la interfaz de producto

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss']
})
export class ProductoDetailComponent implements OnInit {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.findById(productId).subscribe((data: IProduct) => {
      this.product = data;
    });
  }
}