import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CollectionResponse } from '../models/collection-response';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CollectionResponse<Product>> {
    return this.http.get<CollectionResponse<Product>>('/assets/products.json');
  }

  getById(id: number): Observable<Product> {
    return this.http
      .get<CollectionResponse<Product>>('/assets/products.json')
      .pipe(
        map(res => res.items.filter(p => p.id === id)[0])
      );
  }
}
