import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Http, Headers } from '@angular/http';
import { ShareService } from '../../services/share/share';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-vouchers',
  templateUrl: 'vouchers.html'
})

export class VouchersPage {

  preferences: object;
  data: object;
  passPrice: number;
  storedPrice: number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService: ShareService, public http:Http) {
    this.preferences = this.shareService.getPreferences();
    this.data = {};
    this.passPrice = 0;
    this.storedPrice = this.shareService.getPrice();
  }

  toggle(){

  }

  ionViewDidLoad(){

     let headers = new Headers();
     headers.append('key', '531bd696-5113-469c-8086-39073fe89517');
     headers.append('Accept', 'application/json');

     this.http.get('https://apim.expedia.com/x/activities/search?location=Singapore',{headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           this.data = data;
           console.log(this.data);
         });

       }
    
  pushpage(){
    var strPrice = "47";
    var price = +strPrice;
    this.passPrice = price;
    this.shareService.setPrice(this.passPrice);
    console.log(this.shareService.getPrice());
    this.navCtrl.push(PaymentPage);
}
}
