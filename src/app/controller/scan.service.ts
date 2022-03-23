import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private platform: Platform
  ) { }

  scanBarCode() {
    this.platform.ready().then(async () => {
      this.barcodeScanner.scan().then(barcodeData => {
        const valueCod = barcodeData.text;
        return valueCod;
       }).catch(err => {
           console.log('Error: ' + err);
       });
    });
  }
}
