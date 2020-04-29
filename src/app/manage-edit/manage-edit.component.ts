import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import {Product} from '../Product';
import {FormGroup,FormControl,FormBuilder,Validators,} from "@angular/forms";
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
    private router: Router,
    private fbuiler :FormBuilder
  ) { }

  ngOnInit() {
    this.getProduct();
  }
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