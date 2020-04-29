import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";
@Component({
  selector: "app-manage-add",
  templateUrl: "./manage-add.component.html",
  styleUrls: ["./manage-add.component.css"]
})
export class ManageAddComponent implements OnInit {
  url: string | ArrayBuffer;
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private router: Router,
    private fbuiler: FormBuilder,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}
  get productName() {
    return this.checkInput(this.productForm.controls.name);
  }

  get productPrice() {
    return this.checkInput(this.productForm.controls.price);
  }
  get productDescription() {
    return this.checkInput(this.productForm.controls.description);
  }
  get ProductImage() {
    return this.checkInput(this.productForm.controls.image);
  }

  checkInput(value) {
    for (let err in value.errors) {
      if (value.dirty) {
        return this.getErrorMes(err, value.errors[err]);
      }
    }
  }

  productForm = this.fbuiler.group({
    id: new FormControl(),
    name: [
      null,
      [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(1),
        Validators.pattern("^[a-zA-Z]+[a-zA-Z ]*")
      ]
    ],
    price: [
      null,
      [Validators.required, Validators.maxLength(30), Validators.minLength(1)]
    ],
    description: [null, [Validators.required]],
    image: [null, [Validators.required]]
  });

  getErrorMes(err, value) {
    let messages = {
      required: "Do not leave this field blank",
      maxLength: `Maximum of ${value.requiredLength} characters`,
      minlength: `Minimum of ${value.requiredLength} characters`,
      pattern: "wrong format"
    };
    return messages[err];
  }


  ngOnInit() {}
  addProduct() {
    this.product = this.productForm.value;
    this.product.image = this.url.toString();
    this.productService
      .addProduct(this.product)
      .subscribe(data => this.router.navigateByUrl("/manage"));
  }

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = event => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

  clear() {
    this.url = null;
  }
}
