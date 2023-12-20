import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  private cartItems: { product: any; quantity: number }[] = [];

  getCartItems(): { product: any; quantity: number }[] {
    return this.cartItems;
  }
}
