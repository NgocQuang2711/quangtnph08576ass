import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import {FormGroup,FormControl,FormBuilder,Validators,} from "@angular/forms";
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
   get productDescription(){
    return this.checkInput(this.productForm.controls.description);
  }

  checkInput(value) {
    for (let err in value.errors){
      if(value.dirty) {
        return this.getErrorMes(err, value.errors[err]);
      }
    }
  }

  productForm = this.fbuiler.group({
    id: new FormControl,
    name: [null, [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(1),
      Validators.pattern('^[a-zA-Z]+[a-zA-Z ]*')
    ]],
    price: [null, [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(1),
    ]],
    description: [null, [
      Validators.required,
      // Validators.maxLength(30),
      // Validators.minLength(1),
    ]],
     image: [null, [
      Validators.required,
      // Validators.maxLength(30),
      // Validators.minLength(1),
    ]]
  });

getErrorMes(err, value) {
    let messages = {
      'required': 'Do not leave this field blank',
      'maxLength': `Maximum of ${value.requiredLength} characters`,
      'minlength': `Minimum of ${value.requiredLength} characters`,
      'pattern': 'wrong format',
    };
    return messages[err];
  }



  ngOnInit() {}
  addProduct() {
    this.product = this.productForm.value;
       this.productService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/manage'));
  }
}
