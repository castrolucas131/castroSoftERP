import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ToastService } from 'src/app/controller/toast.service';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.page.html',
  styleUrls: ['./pdv.page.scss'],
})
export class PdvPage implements OnInit {

  public viewAlert = false;
  public viewDescAcr = false;
  public viewOptions = false;
  public valueInsertAler: number;
  public textAlert: string;
  public barCode: any;
  public quant = 1;
  public pr = 3.50;
  public total = 3.50;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private platform: Platform,
    private toastController: ToastService
  ) { }

  ngOnInit() {
  }

  _ionChange(event) {
    // // .trim() remove espaço vazio no inicio e fim
    // const value = event.target.value.trim().toUpperCase();

    // for (let i = 0; i < this.modelPessoa.length; i++) {
    //   if (this.modelPessoa[i].RAZAO.toUpperCase().indexOf(value) !== -1) {
    //     console.log(this.modelPessoa[i].RAZAO);
    //   }
    //   else{
    //     delete this.modelPessoa[i];
    //   }
    // }
    // // Remove espaços vazios do Array
    // // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    // const removeSpaces = this.modelPessoa.filter(function(i) {
    //   return i;
    // });
    // this.modelPessoa = removeSpaces;
    // console.log(this.modelPessoa);
  }

  scanBarCode() {
    this.platform.ready().then(async () => {
      this.barcodeScanner.scan().then(barcodeData => {
        this.barCode = barcodeData.text;
        return this.barCode;
       }).catch(err => {
           console.log('Error: ' + err);
       });
    });
  }

  removeItem() {
    if(this.quant >= 2) {
      this.quant = this.quant -1;
      this.total = this.pr * this.quant;
    }
  }

  addItem() {
    this.quant = this.quant + 1;
    this.total = this.pr * this.quant;
  }

  fractional() {
    this.textAlert = 'Digite a fração';
    this.viewAlert = true;
    this.valueInsertAler = null;
  }

  altTotal() {
    this.textAlert = 'Alteração de valor';
    this.viewAlert = true;
    this.valueInsertAler = null;
    this.viewOptions = true;
  }

  confirmAlert() {
    // Alert de quantidade
    if(this.viewOptions === false) {
      if (this.valueInsertAler === 0){
        this.quant = 1;
        this.viewAlert = false;
      }
      else if(this.valueInsertAler !== 0) {
        this.quant = this.valueInsertAler;
        this.total = this.pr * this.valueInsertAler;
        this.viewAlert = false;
      }
    }

    // Alert de Alteração de preço
    else if(this.viewOptions === true) {
      if(this.valueInsertAler > this.total){
        this.toastController.presentToast('Valor excede o total!', 'danger', 500);
        this.viewOptions = false;
        this.viewAlert = false;
      }
      else if(this.valueInsertAler <= this.total) {
        this.total = this.total - this.valueInsertAler;
        this.viewAlert = false;
        this.viewOptions = false;
      }
    }
  }

  cancelAlert() {
    this.viewAlert = false;
    this.viewOptions = false;
  }

  deleteItem() {
    this.toastController.presentToast('Produto removido com sucesso!', 'danger', 500);
  }
}
