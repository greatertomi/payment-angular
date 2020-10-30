import { Component, OnInit } from '@angular/core';
import {Flutterwave, PaymentSuccessResponse} from 'flutterwave-angular-v3';

@Component({
  selector: 'app-flutterwave',
  templateUrl: './flutterwave.component.html',
  styleUrls: ['./flutterwave.component.scss']
})
export class FlutterwaveComponent implements OnInit {
  publicKey = 'FLWPUBK_TEST-XXXXX-X';

  customerDetails = { name: 'Demo Customer  Name', email: 'customer@mail.com', phone_number: '08100000000'};

  customizations = {
    title: 'Customization Title',
    description: 'Customization Description',
    logo: 'https://flutterwave.com/images/logo-colored.svg'
  };

  meta = {consumer_id: '7898', consumer_mac: 'kjs9s8ss7dd'};
  /*-- Public key: FLWPUBK_TEST-c583a392348de7a4ab83b53c461bc0ba-X
  -- Secret key: FLWSECK_TEST-de683172616920f8a83fd227fc5813e6-X*/

  constructor( private flutterwave: Flutterwave) { }

  ngOnInit(): void {}

  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log('Pay', response);
    this.flutterwave.closePaymentModal(5);
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  generateReference(): string {
    const date = new Date();
    return date.getTime().toString();
  }

}
