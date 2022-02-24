import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[] = [];

  constructor() {
    this.products.push(new Product(1, "nike", 35000, true, "https://dbk.vn/uploads/ckfinder/images/tranh-anh/anh-gai-xinh-15.jpg")),
      this.products.push(new Product(2, "uniquilo", 45000, false, "https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2k-de-thuong-cute-580x362.jpg")),
      this.products.push(new Product(3, "tanaka", 55000, true, "https://icdn.dantri.com.vn/thumb_w/640/2020/12/16/ngam-dan-hot-girl-xinh-dep-noi-bat-nhat-nam-2020-docx-1608126694049.jpeg"))

  }

  create(product: Product) {
    let check = true;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product;
        check = false;
      }

    }
    if (check) {
      this.products.push(product);
    }
  }

  delete(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1)
        return;
      }
    }
  }
}

