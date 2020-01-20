import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

   private productsServiceURI: string = 'http://localhost:3000/products'

   constructor(private http: HttpClient) { }


   getAllProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsServiceURI);
   }

}
