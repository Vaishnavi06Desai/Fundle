import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  //json: any;
  json : {
    "amount": 1000,
    "currency": "INR",
    "reference_id": "Fundle101",
    "description": "Payment Test Fundle",
    "customer": {
      "name": "Anika Tibrewala",
      "contact": "+91708252413",
      "email": "anikatibrewala@gmail.com"
    },
    "notify": {
      "sms": false,
      "email": true
    },
    "reminder_enable": true,
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }
  payment() {

    this.httpClient.post<any>('https://api.razorpay.com/v1/payment_links/',this.json, {
      headers: { 'Authorization': 'Basic cnpwX3Rlc3RfSVYzeUtxbnNrRk92VWc6QmFPbUtlSTF3dFF2bjlKRHRSZ3RGSnZZ','Access-Control-Allow-Origin':'*','withCredentials': 'true'}
    }).subscribe(
      (res) => {
        console.log(res);
       
      },
      (err) => {
        console.log(err);
    
      }
    );
  }
}
