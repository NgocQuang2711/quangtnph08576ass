import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-manage-add',
  templateUrl: './manage-add.component.html',
  styleUrls: ['./manage-add.component.css']
})
export class ManageAddComponent implements OnInit {

  product: Product = new Product();
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}
  addProduct() {
    this.productService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/manager'));
  }

}