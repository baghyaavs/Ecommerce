import { Component } from '@angular/core';
import { Products } from '../../products';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {

  product:Products[]=
  [
    {
      productid:1101,
      productname:'Allen Solly',
      description:'Slim Fit Casual Shirt',
      price:6000,
      image:'assets/men/shirt1.jpg'
    
    },
    {
      productid:1102,
      productname:'U.S.POLO',
      description:'Casual Shirt',
      price:6000,
      image:'assets/men/shirt2.jpg'
   
    },
    {
      productid:1103,
      productname:'Allen Solly',
      description:'Slim Fit Casual Shirt',
      price:2000,
      image:'assets/men/shirt8.jpg'
    },
    {
      productid:1104,
      productname:'Van Heusen',
      description:'Men Suit - Dress Set',
      price:50000,
      image:'assets/men/suite1.jpg'
    },
    {
      productid:1105,
      productname:'Max',
      description:'Men Tshirt',
      price:6000,
      image:'assets/men/t2.jpg'
    },
    {
      productid:1106,
      productname:'Max',
      description:'Men Tshirt',
      price:2000,
      image:'assets/men/t3.jpg'
    },
    {
      productid:1107,
      productname:'Levi',
      description:'Men T-Shirt',
      price:6000,
      image:'assets/men/t6.jpg'
    },
    {
      productid:1108,
      productname:'Levi',
      description:'Men Shirt',
      price:2000,
      image:'assets/men/s.jpg'
    },
    {
      productid:1109,
      productname:'Park Avenue',
      description:'Premium Dhoti',
      price:6000,
      image:'assets/men/dhoti5.jpg'
    },
    {
      productid:1110,
      productname:'Park Avenue',
      description:'Slim Fit Pant',
      price:2000,
      image:'assets/men/p4.jpg'
    },
    {
      productid:1111,
      productname:'Pepe Jeans',
      description:'Men Jeans',
      price:6000,
      image:'assets/men/jean4.jpg'
        },
    {
      productid:1112,
      productname:'Pepe Jeans',
      description:'Men Jeans',
      price:2000,
      image:'assets/men/jean3.jpg'
    }

  ]
  constructor(private cartservice:CartService, private authservice:LoginService){}

  addtoCart(product:Products):void{
    if(this.authservice.isAuthenticated()){
      this.cartservice.addToCarts(product);
      this.cartservice.addtoCart(product);
      window.alert('Product Added to cart!!!...')
    }
    else{
      window.alert('Please log in to add items to your cart.');
    }
  }
  isLoggedIn(): boolean {
    return this.authservice.isAuthenticated();
  }

}
