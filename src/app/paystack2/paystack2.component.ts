import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {paystackSkTest} from '../shared/keys';

@Component({
  selector: 'app-paystack2',
  templateUrl: './paystack2.component.html',
  styleUrls: ['./paystack2.component.scss']
})
export class Paystack2Component implements OnInit, AfterViewInit {
  reference = '';
  title;
  email = 'oshalusijohn@gmail.com';
  amount = 10000;
  @ViewChild('myBtn') myBtn: ElementRef<HTMLElement>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  ngAfterViewInit(): void {
    const el: HTMLElement = this.myBtn.nativeElement;
    el.click();
  }

  generateRefNumber(): void {
    const body = {email: this.email, amount: this.amount * 100};
    const headers = new HttpHeaders({Authorization: `Bearer ${paystackSkTest}`});
    this.http.post('https://api.paystack.co/transaction/initialize', body, {headers}).subscribe(
      res => {
        console.log(res);
        // @ts-ignore
        const { data } = res;
        this.reference = data.reference;
      },
      err => {
        console.log(err);
      }
    );
  }

  buttonClicked(): void {
    // console.log('you clicked me!');
  }

  paymentDone(ref: any): void {
    this.title = 'Payment successful';
    console.log(this.title, ref);
  }

  paymentCancel(): void {
    console.log('payment failed');
  }

}
