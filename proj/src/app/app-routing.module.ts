import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './categories/men/men.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WomenComponent } from './categories/women/women.component';
import { FaqComponent } from './footer/faq/faq.component';
import { FeesComponent } from './footer/fees/fees.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { ReturnsComponent } from './footer/returns/returns.component';
import { TermsComponent } from './footer/terms/terms.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'faq',component:FaqComponent},
  {path:'fees',component:FeesComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'returns',component:ReturnsComponent},
  {path:'terms',component:TermsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
