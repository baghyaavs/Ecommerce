import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

declare var Razorpay:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    // Calculate the total amount for each item based on cart items
    this.cartItems.forEach(item => {
      item.total = item.product.price * item.quantity;
    });

    // Calculate the overall total amount
    this.totalAmount = this.cartItems.reduce((total, item) => total + item.total, 0);
  }
  payNow(){

    const RazorpayOptions={
     description:'Elan Ecommerce',
     currency:'INR',
     amount:this.totalAmount*100,
     name:'Baghyaa',
     key:'rzp_test_WLUJN5EqHAlqTJ',
  
     prefills:{
      name:'baghyaa',
      email:'baghyaa@gmail.com',
      phone:'9445715583'
     },
     theme:{
      color:'blue'
     },
     modal:{
      ondismiss: () =>{
        console.log('dismissed')
      }
     }
  }
   const sucessCallback=(paymentid:any)=>{
    console.log(paymentid);
   }
   const failureCallback=(fail:any)=>{
    console.log(fail);
   }
   Razorpay.open(RazorpayOptions,sucessCallback,failureCallback)
 }


}

















 /* address: any = {
    "SaleId": 0,
    "CustId": 0,
    "SaleDate": new Date(),
    "TotalInvoiceAmount": 0,
    "Discount": 0,
    "PaymentNaration": "",
    "DeliveryAddress1": "",
    "DeliveryAddress2": "",
    "DeliveryCity": "",
    "DeliveryPinCode": "",
    "DeliveryLandMark": ""
  }

  constructor(private cartService: CartService, private authService: LoginService) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  placeOrder(): void {
    // Implement order placement logic here
    console.log('Order placed!');
    this.cartService.clearCart();
  }

}
*/