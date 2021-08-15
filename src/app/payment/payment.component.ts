import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  json={
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

    this.httpClient.post<any>('https://fundle-backend.herokuapp.com/v1/fundle/request_Payment', { 'payload': this.json }, {

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