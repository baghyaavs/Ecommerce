import { Injectable } from '@angular/core';
import { Products } from '../products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Products; quantity: number }[] = [];
  private apiUrl = 'http://localhost:8080/proj'; 
  constructor(private http:HttpClient) { }
  addToCarts(product:Products):void{
    const existingItemIndex = this.cartItems.findIndex(item => item.product.productid === product.productid);
  if (existingItemIndex !== -1) {
    // If the product already exists in the cart, increment the quantity
    this.cartItems[existingItemIndex].quantity++;
  } else {
    // If the product is not in the cart, add it with quantity 1
    this.cartItems.push({ product, quantity: 1 });
  }
  }
  getCartItems(): { product: any; quantity: number }[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }

 removeFromCarts(item: any): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.product.productid === item.product.productid);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  incrementQuantity(item: any): void {
    item.quantity++;
  }
  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }


addtoCart(obj:Products):void{
    console.log(obj);
    this.http.post(`${this.apiUrl}/addtoCart`,obj).subscribe(
      response => {
        console.log("successfully added to cart");
        // Handle success
      },
      error => {
        console.error(error);
        // Handle error
      }
    );  
  } 

  removeFromCart(product: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeFromCart`, { body: product });
  }
 
}
