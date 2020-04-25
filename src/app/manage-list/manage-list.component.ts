import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductService } from "../product.service";
@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css']
})
export class ManageListComponent implements OnInit {

  selected: Product;
  products: Product[];
  page = 1;
  pageSize = 3;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  detailProduct(product) {
    product.status = !product.status;
    this.selected = product;
  }
  removeItem(id) {
    this.products = this.products.filter(product => product.id != id);
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}