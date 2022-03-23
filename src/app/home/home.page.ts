import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public slidesOptions: any = { slidesPerView: 3, freeMode: true };
  public items: Array<any> = [
    { icon: 'person-outline', text: 'Perfil'},
    { icon: 'help-circle-outline', text: 'Me Auda'},
    { icon: 'settings-outline', text: 'Configurar conta'},
    { icon: 'phone-portrait-outline', text: 'Configurações do app'}
  ];
  public viewSettings = false;

  constructor(
    private router: Router
  ) {}


  settings() {
    if (this.viewSettings === true) {
      this.viewSettings = false;
    }
    else {
      this.viewSettings = true;
    }

  }

  help() {
    alert('Ajuda!');
  }

  logout() {
    this.router.navigate(['/login']);
    this.viewSettings = false;
  }
}
