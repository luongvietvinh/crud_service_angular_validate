import {Component, OnInit} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products : Product[] = []

  formCreate!:FormGroup;




  constructor(private productService: ProductServiceService, private storage: AngularFireStorage ) {
    this.products= productService.products;
  }

  product: Product = new Product(0,"",0,true,"" );
  ngOnInit() {

    this.formCreate = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl('', Validators.maxLength(6)),
      price: new FormControl(0, Validators.min(5)),
      status: new FormControl(true),
      img: new FormControl(),
  })
  }
  showEdit(product : Product){
    this.product = new Product(product.id,product.name,product.price,product.status,product.img)
  }

  createProduct() {
    this.productService.create(this.formCreate.value);
    this.formCreate.reset();
  }
  edit(formedit : any){
    this.productService.create(formedit);
  }
  delete(id: number){
    this.productService.delete(id);
  }



  fb: string | any;
  downloadURL: Observable<string> | any;
  fileupload :boolean = false;
  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url: any) => {
            if (url) {
              this.fb = url;
              this.product.img= url
              this.fileupload = true;
            }

          });
        })
      )
      .subscribe(url => {
        if (url) {
        }
      });
  }

}
