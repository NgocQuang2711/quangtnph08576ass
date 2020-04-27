import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
MaxLengthValidator
} from "@angular/forms";
@Component({
  selector: "app-manage-add",
  templateUrl: "./manage-add.component.html",
  styleUrls: ["./manage-add.component.css"]
})
export class ManageAddComponent implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService,
              private router: Router,
              private fbuiler :FormBuilder
              ) {}
  get productName(){
    return this.checkInput(this.productForm.controls.name);
  }

  get productPrice(){
    return this.checkInput(this.productForm.controls.price);
  }

  get productImage(){
    return this.checkInput(this.productForm.controls.image);
  }

  checkInput(value) {
    for (let err in value.errors){
      if(value.dirty) {
        return this.getErrorMes(err, value.errors[err]);
      }
    }
  }

  productForm = this.fbuiler.group({
    name: [null, [
      Validators.required,
      Validators.maxLength(maxLength: 30),
      Validators.minLength(minLength: 1),
    ]],
    price: [null, [
      Validators.required,
      Validators.maxLength(maxLength: 30),
      Validators.minLength(minLength: 1),
    ]],
  });

  getErrorMes(err, value) {
    let message = {};
    return message[err];
  }

  ngOnInit() {}
  addProduct() {
    this.productService
      .addProduct(this.product)
      .subscribe(data => this.router.navigateByUrl("/manager"));
  }
}
