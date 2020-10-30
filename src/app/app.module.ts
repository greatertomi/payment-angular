import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlutterwaveComponent } from './flutterwave/flutterwave.component';
import {FlutterwaveModule} from 'flutterwave-angular-v3';

@NgModule({
  declarations: [
    AppComponent,
    FlutterwaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlutterwaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
