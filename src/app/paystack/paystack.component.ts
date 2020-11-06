import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {paystackPkLive, paystackPkTest} from '../shared/keys';

@Component({
  selector: 'app-paystack',
  templateUrl: './paystack.component.html',
  styleUrls: ['./paystack.component.scss']
})
export class PaystackComponent implements OnInit {
  email: string;
  amount: number;
  paymentLink: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makePayment(): void {
    const body = {email: this.email, amount: this.amount * 100};
    const headers = new HttpHeaders({Authorization: `Bearer ${paystackPkTest}`});
    this.http.post('https://api.paystack.co/transaction/initialize', body, {headers}).subscribe(
      res => {
        console.log(res);
        // @ts-ignore
        const { data } = res;
        this.paymentLink = data.authorization_url;
      },
      err => {
        console.log(err);
      }
    );
  }

}
