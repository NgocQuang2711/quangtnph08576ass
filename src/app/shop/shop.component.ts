import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductService } from "../product.service";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  selected: Product;
  products: Product[];
  page = 1;
  pageSize = 8;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  detailProduct(product) {
    product.status = !product.status;
    this.selected = product;
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}