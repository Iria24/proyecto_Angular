import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; // Importa la interfaz de producto
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {
    //Aquí se implementa la lógica si fuera necesario al iniciar el componente
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: IProduct = this.productForm.value;
      // Llama a ProductService.create para crear un nuevo producto con newProduct
      this.productService.create(newProduct).subscribe((data: IProduct) => {
        // Lógica después de crear el producto
      });
    }
  }
}