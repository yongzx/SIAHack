import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-vouchers',
  templateUrl: 'vouchers.html'
})
export class VouchersPage {

  anotherPage = PaymentPage;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  toggle(){
    
  }

  ionViewDidLoad(){
    
     let headers = new Headers();
     headers.append('key', '531bd696-5113-469c-8086-39073fe89517');
     headers.append('Accept', 'application/json');
 
     this.http.get('https://apim.expedia.com/x/activities/search?location=London',{headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           console.log(data);
         });
   
       }
 
}
