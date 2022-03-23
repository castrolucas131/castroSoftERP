/* eslint-disable @typescript-eslint/naming-convention */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/controller/toast.service';
import { Product } from 'src/app/model/product';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.page.html',
  styleUrls: ['./product-new.page.scss'],
})
export class ProductNewPage implements OnInit {

  public formProduct: FormGroup;
  public produto = {} as Product;
  public barCode: any;
  public validForm = false;
  public viewAlertDelete = false;

  constructor(
    private router: Router,
    private toastController: ToastService,
    private formBuilder: FormBuilder,
    private barcodeScanner: BarcodeScanner,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.createForm();
  }

  // Controle de Validação de Formulário
  createForm() {
    this.formProduct = this.formBuilder.group ({
      codigo: [''],
      codBarra: ['',[Validators.minLength, Validators.maxLength]],
      tipo: ['',[Validators.minLength, Validators.maxLength]],
      grupo: [''],
      unidade: ['',[Validators.minLength, Validators.maxLength]],
      aliq_icm: ['',[Validators.minLength, Validators.maxLength]],
      aliq_pis: ['',[Validators.minLength, Validators.maxLength]],
      aliq_cof: ['',[Validators.minLength, Validators.maxLength]],
      pr_custo: ['',[Validators.required, Validators.minLength, Validators.maxLength]],
      margem: ['', [Validators.minLength, Validators.maxLength]],
      pr_venda: ['',[Validators.minLength, Validators.maxLength]],
      qtd_atual: ['',[Validators.minLength, Validators.maxLength]],
      qtd_min: ['',[Validators.minLength, Validators.maxLength]],
      ncm: ['000000',[Validators.required, Validators.minLength, Validators.maxLength]],
      ativo: ['',[Validators.minLength, Validators.maxLength]],
      pr_custo_anterior: ['',[Validators.required, Validators.minLength, Validators.maxLength]],
      pr_venda_anterior: ['',[Validators.required, Validators.minLength, Validators.maxLength]],
      ult_compra: ['',[Validators.minLength, Validators.maxLength]],
      ult_compra_anterior: ['',[Validators.minLength, Validators.maxLength]],
      empresa: ['',[Validators.minLength, Validators.maxLength]],
      dt_cadastro: ['',[Validators.minLength, Validators.maxLength]],
      descricao: ['',[Validators.required, Validators.minLength, Validators.maxLength]]
    });
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

  save() {
    // Garante a alteração e inserção de dados novos no Array
    this.formProduct.value.codBarra = this.barCode;
    // Calcula a margem de lucro e joga no formulário
    this.formProduct.value.margem = ((this.formProduct.value.pr_venda - this.formProduct.value.pr_custo)
    * 100) / this.formProduct.value.pr_custo;

    // Só salvar se os seguintes campos forem válidos
    if (this.formProduct.controls.descricao.status === 'VALID'
        && this.formProduct.controls.pr_custo.status === 'VALID'
        && this.formProduct.controls.pr_venda.value !== ''
    ) {

      console.log(this.formProduct.value);
      this.router.navigate(['/product-list']);
      this.toastController.presentToast('Parabéns! Alteração realizada com sucesso.', 'success', 1000);
    }
    else {
      console.log(this.formProduct.value);
      this.toastController.presentToast('Há campos inválidos!.', 'danger', 1000);
    }
  }

  cancel() {
    this.router.navigate(['/product-list']);
    this.toastController.presentToast('Alteração cancelada com sucesso.', 'danger', 1000);
  }

  delete() {
    this.viewAlertDelete = true;
  }

  cancelAction() {
    this.viewAlertDelete = false;
  }

  confirmAction() {
    this.viewAlertDelete = false;
    this.router.navigate(['/product-list']);
    this.toastController.presentToast('Produto excluído com sucesso.', 'success', 1000);
  }
}
