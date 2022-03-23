import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ToastService } from 'src/app/controller/toast.service';
import { Router } from '@angular/router';
import { LoadginService } from 'src/app/controller/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public showWelcome = true;
  public formLogin: FormGroup;
  public message: string;

  constructor(
    private toastController: ToastService,
    private loadingController: LoadginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  // Formulário Validações
  createForm(){
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Atualizar o APP clicando no logo na tela de login
  updateAPK(){
    this.loadingController.presentLoading('Verificando...');
    this.message = 'Verificando se há atualização disponível...';

    setTimeout(() =>{
      this.message = null;
      this.loadingController.loadingDismiss();
      this.toastController.presentToast('Sua versão está atualizada!', 'success', 1000);
    }, 1800);
  }

  // Visuzaliza ou oculta a tela de Login
  goLogin(): void{
    if(this.showWelcome === true) {
      this.showWelcome = false;
    }
    else {
      this.showWelcome = true;
    }
  }

  // Autenticação de Login
  loginAuthentication(){
    this.loadingController.presentLoading('Aguarde...');
    const login = Object.assign(this.formLogin.value);
    // console.log(login);
    if (login.login === 'SUPORTE' && login.password === 'qpalzm') {
      this.loadingController.loadingDismiss();
      this.toastController.presentToast('Seja bem vindo(a)!', 'success',  1000);
      this.router.navigate(['/home']);
    }
    else if (login.login === 'admin' && login.password === 'admin') {
      this.loadingController.loadingDismiss();
      this.toastController.presentToast('Seja bem vindo(a)!', 'success',  1000);
      this.router.navigate(['/home']);
    }
    else{
      this.loadingController.loadingDismiss();
      this.toastController.presentToast('Dados inválidos. Tente novamente!', 'danger',  1000);
    }
  }
}
