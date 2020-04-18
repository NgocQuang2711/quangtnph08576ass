import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../Product";

@Component({
  selector: 'app-manage-detail',
  templateUrl: './manage-detail.component.html',
  styleUrls: ['./manage-detail.component.css']
})
export class ManageDetailComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  product: Product;
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      });
      console.log(param);
    });
  }

}