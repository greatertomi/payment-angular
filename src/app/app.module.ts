import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlutterwaveComponent } from './flutterwave/flutterwave.component';
import {FlutterwaveModule} from 'flutterwave-angular-v3';
import { PaystackComponent } from './paystack/paystack.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Angular4PaystackModule} from 'angular4-paystack';
import { Paystack2Component } from './paystack2/paystack2.component';
import {paystackPkTest, paystackPkLive} from './shared/keys';

@NgModule({
  declarations: [
    AppComponent,
    FlutterwaveComponent,
    PaystackComponent,
    Paystack2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlutterwaveModule,
    HttpClientModule,
    FormsModule,
    Angular4PaystackModule.forRoot(paystackPkTest)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
