import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DatabaseService } from './controller/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private baseService: DatabaseService
  ) {
    this.platform.ready().then(() => {
      this.baseService.createDatabase()
      .then(() => {
        console.log('Data Base Created Success.');
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
