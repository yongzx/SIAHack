import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanTicketsPage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner) {
    
  }

  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }
}
