import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  public options: Array<any> = [
    { name: 'Feião Carioca 1Kg', estoque: '15 Und.', preco: 'R$ 7,00', link: '../../../../assets/products/feijaoCarioca.jpg'},
    { name: 'Feião Gama Lopes 1Kg', estoque: '15 Und.', preco: 'R$ 8,20', link: '../../../assets/products/feijaoGamaLopes.jpg'},
    // eslint-disable-next-line max-len
    { name: 'Leite em Pó Piracanjuba 250g', estoque: '15 Und.', preco: 'R$ 4,70', link: '../../../assets/products/leitePiracanjuba.jpg'},
    { name: 'Café Pilão 250g', estoque: '15 Und.', preco: 'R$ 3,95', link: '../../../assets/products/cafePilao.jpg'},
    { name: 'Arroz Fazenda Parbolizado 1Kg', estoque: '15 Und.', preco: 'R$ 10,00', link: '../../../assets/products/arrozFazenda.png'},
    { name: 'Feião Carioca 1Kg', estoque: '15 Und.', preco: 'R$ 7,00', link: '../../../assets/products/feijaoCarioca.jpg'},
    { name: 'Feião Gama Lopes 1Kg', estoque: '15 Und.', preco: 'R$ 8,20', link: '../../../assets/products/feijaoGamaLopes.jpg'},
    // eslint-disable-next-line max-len
    { name: 'Leite em Pó Piracanjuba 250g', estoque: '15 Und.', preco: 'R$ 4,70', link: '../../../assets/products/leitePiracanjuba.jpg'},
    { name: 'Café Pilão 250g', estoque: '15 Und.', preco: 'R$ 3,95', link: '../../../assets/products/cafePilao.jpg'},
    { name: 'Arroz Fazenda Parbolizado 1Kg', estoque: '15 Und.', preco: 'R$ 10,00', link: '../../../assets/products/arrozFazenda.png'},
    { name: 'Feião Carioca 1Kg', estoque: '15 Und.', preco: 'R$ 7,00', link: '../../../assets/products/feijaoCarioca.jpg'},
    { name: 'Feião Gama Lopes 1Kg', estoque: '15 Und.', preco: 'R$ 8,20', link: '../../../assets/products/feijaoGamaLopes.jpg'},
    // eslint-disable-next-line max-len
    { name: 'Leite em Pó Piracanjuba 250g', estoque: '15 Und.', preco: 'R$ 4,70', link: '../../../assets/products/leitePiracanjuba.jpg'},
    { name: 'Café Pilão 250g', estoque: '15 Und.', preco: 'R$ 3,95', link: '../../../assets/products/cafePilao.jpg'},
    { name: 'Arroz Fazenda Parbolizado 1Kg', estoque: '15 Und.', preco: 'R$ 10,00', link: '../../../assets/products/arrozFazenda.png'},
    { name: 'Feião Carioca 1Kg', estoque: '15 Und.', preco: 'R$ 7,00', link: '../../../assets/products/feijaoCarioca.jpg'},
    { name: 'Feião Gama Lopes 1Kg', estoque: '15 Und.', preco: 'R$ 8,20', link: '../../../assets/products/feijaoGamaLopes.jpg'},
    // eslint-disable-next-line max-len
    { name: 'Leite em Pó Piracanjuba 250g', estoque: '15 Und.', preco: 'R$ 4,70', link: '../../../assets/products/leitePiracanjuba.jpg'},
    { name: 'Café Pilão 250g', estoque: '15 Und.', preco: 'R$ 3,95', link: '../../../assets/products/cafePilao.jpg'},
    { name: 'Arroz Fazenda Parbolizado 1Kg', estoque: '15 Und.', preco: 'R$ 10,00', link: '../../../assets/products/arrozFazenda.png'}
  ];

  constructor(
    private router: Router
  ) {}

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

  doRefresh(event) {
    setTimeout(() => {
      // this.getAllPessoaOffline();
      event.target.complete();
    }, 200);
  }

  navePage() {
    this.router.navigate(['/product-new']);
  }
}
