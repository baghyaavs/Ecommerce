import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './categories/men/men.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WomenComponent } from './categories/women/women.component';
import { TermsComponent } from './footer/terms/terms.component';
import { FaqComponent } from './footer/faq/faq.component';
import { ReturnsComponent } from './footer/returns/returns.component';
import { FeesComponent } from './footer/fees/fees.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenComponent,
    CartComponent,
    CheckoutComponent,
    WomenComponent,
    TermsComponent,
    FaqComponent,
    ReturnsComponent,
    FeesComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
