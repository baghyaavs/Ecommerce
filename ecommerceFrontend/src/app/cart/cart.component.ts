import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

//declare var Razorpay:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  //private cartItem: { product: any; quantity: number; isLikeActive: boolean }[] = [];
  cartItems: any[] = [];
  isLikeActive = false;
  quantity = 1;
  constructor(private cartservice:CartService, private router:Router,private authservice:LoginService){}
  isLoggedIn(): boolean {
    return this.authservice.isAuthenticated();
  }
  ngOnInit(): void {
    // Fetch cart items from your service
    this.cartItems = this.cartservice.getCartItems();
  }
  removeItem(item: any): void {
    // Remove item from the cart
    this.cartservice.removeFromCarts(item);
    this.cartservice.removeFromCart(item.product).subscribe(
      () => {
        console.log('Item removed from the database.');
      },
      (error) => {
        console.error('Error removing item from the database:', error);
      }
    );
    // Refresh cart items after removal
    this.cartItems = this.cartservice.getCartItems();
  }
  incrementQuantity(item: any): void {
    // Increment item quantity
    this.cartservice.incrementQuantity(item);
    // Refresh cart items after incrementing quantity
    this.cartItems = this.cartservice.getCartItems();
  }
  decrementQuantity(item: any): void {
    // Decrement item quantity
    this.cartservice.decrementQuantity(item);
    // Refresh cart items after decrementing quantity
    this.cartItems = this.cartservice.getCartItems();
  }
  toggleLike(item: any) {
    this.isLikeActive = !this.isLikeActive;
  }

  

  

}
