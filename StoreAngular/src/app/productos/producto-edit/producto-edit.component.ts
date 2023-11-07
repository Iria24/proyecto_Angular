import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; // Importa la interfaz de producto
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {
  productForm: FormGroup;
  productId: number | null = null; // Agrega una propiedad para el ID del producto

  constructor(private productService: ProductService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.productService.findById(this.productId).subscribe((product: IProduct) => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: IProduct = this.productForm.value;
      if (this.productId) {
        // Si hay un ID de producto, actualiza el producto existente
        this.productService.update(this.productId, product).subscribe((data: IProduct) => {
          // Lógica después de actualizar el producto
        });
      } else {
        // Si no hay un ID de producto, crea un nuevo producto
        this.productService.create(product).subscribe((data: IProduct) => {
          // Lógica después de crear el producto
        });
      }
    }
  }
}