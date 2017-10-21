import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  siaData : object;

  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner, public http: Http) { 
    this.siaData = {yes: "bluff"};
  }
  
  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
    var divOne = document.getElementById('hidethislater');
	divOne.style.visibility = 'hidden';
  }

  ionViewDidLoad(){
   
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', 'du1yO8KLZm9PfFeg6OHQW8CFcpK1RMym3JXp78Uk');
    headers.append('Access-Control-Allow-Origin',  '*');
    
    let body = {
      "request": {
         "pnr": "RVA7GY"
      },
      "clientUUID": "SEAMinervans"
    }

    this.http.post('https://apidev.singaporeair.com/appchallenge/checkin/getpassenger', JSON.stringify(body), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          this.siaData = data;
          console.log(data);
        });
  
      }

}
