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
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner, public http: Http) { 
  }
  
  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

  ionViewDidLoad(){
   
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', 'du1yO8KLZm9PfFeg6OHQW8CFcpK1RMym3JXp78Uk');
    
    let body = {
      "request": {
         "pnr": "RVA7GY"
      },
      "clientUUID": "SEAMinervans"
    }

    this.http.post('https://apidev.singaporeair.com/appchallenge/checkin/getpassenger', JSON.stringify(body), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
        });
  
      }

}
