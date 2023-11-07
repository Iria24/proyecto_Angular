import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './i-product'; // Importa la interfaz de producto

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_BASE_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  findAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_BASE_URL);
  }

  findById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_BASE_URL}/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_BASE_URL, product);
  }

  // Implementa otros métodos como update, delete, etc.
}