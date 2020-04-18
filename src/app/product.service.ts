import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";
@Injectable()
export class ProductService {


  api = "https://5e79ba6717314d001613355b.mockapi.io/product";
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product> {
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product) {
    return this.http.post<Product>(`${this.api}`, product);
  }
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }


}
