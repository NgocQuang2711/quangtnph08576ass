import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Product} from '../Product';
@Component({
  selector: 'app-manage-edit',
  templateUrl: './manage-edit.component.html',
  styleUrls: ['./manage-edit.component.css']
})
export class ManageEditComponent implements OnInit {
  product:Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
     this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data =>{
        this.product=data;
      })
      console.log(param);
    })
  }
  edit(){
    this.productService.editProduct(this.product).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/product-manager']);
    }
    );
    
  }

}