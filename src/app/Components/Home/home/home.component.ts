import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Model/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: IProduct[] = [];
  bestSellerList: IProduct[] = [];
  constructor(
    private produtService: ProductService,
    private route: Router,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.produtService.getNewproducts().subscribe((p) => {
      this.productList = p;
    });
    this.produtService
      .getBestSellerproducts()
      .subscribe((p) => (this.bestSellerList = p));
  }
  addToCart(product:IProduct){
    this.CartService.addToCart(product);
  }
}
