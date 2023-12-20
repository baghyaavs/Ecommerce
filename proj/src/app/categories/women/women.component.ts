import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Products } from '../../products';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
 
  product:Products[]=
  [
    {
      productid:1201,
      productname:'Soch',
      description:'Womens Pashmina Print Saree',
      price:11,
      image:'assets/women/saree1.jpg'
    },
    {
      productid:1202,
      productname:'GoSriKi',
      description:'Georgette Solid Saree',
      price:60000,
      image:'assets/women/saree2.jpg'
    },
    {
      productid:1203,
      productname:'SIRIL',
      description:'Women Georgette Prints Saree',
      price:2000,
      image:'assets/women/saree8.jpg'
    },
    {
      productid:1204,
      productname:'Bollyclues',
      description:'Women Kurta',
      price:50000,
      image:'assets/women/w1.jpg'
    },
    {
      productid:1205,
      productname:'Max',
      description:'Women Pants',
      price:60000,
      image:'assets/women/p2.jpg'
    },
    {
      productid:1206,
      productname:'Wishful',
      description:'Women Embroidered Kurta set',
      price:2000,
      image:'assets/women/kurti3.jpg'
    },
    {
      productid:1207,
      productname:'GoSriKi',
      description:'Womens Silk Blend Zari Saree',
      price:60000,
      image:'assets/women/saree5.jpg'
    },
    {
      productid:1208,
      productname:'INDO ERA',
      description:'Women Kurti',
      price:2000,
      image:'assets/women/kurti6.jpg'
    },
    {
      productid:1209,
      productname:'Park Avenue',
      description:'Women Cotton Lycra Pant',
      price:60000,
      image:'assets/women/p7.jpg'
    },
    {
      productid:1210,
      productname:'Park Avenue',
      description:'Slim Fit Pant',
      price:2000,
      image:'assets/women/p4.jpg'
    },
    {
      productid:1211,
      productname:'Miss Chase',
      description:'Women Kurthi',
      price:60000,
      image:'assets/women/kurti4.jpg'
    },
    {
      productid:1212,
      productname:'AEROPOSTALE',
      description:'Regular Fit Shirt',
      price:2000,
      image:'assets/women/tops3.jpg'
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
