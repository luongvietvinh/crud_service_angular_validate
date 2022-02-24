import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductServiceService} from "../service/product-service.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: Product[] = [];
  constructor(private productService: ProductServiceService) {
    this.product=productService.products;
  }

  ngOnInit(): void {
  }

}
