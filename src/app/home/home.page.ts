import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.username === 'profesor' && this.password === 'profesor') {
      this.navCtrl.navigateForward('/profesor');
    } else if (this.username === 'alumno' && this.password === 'alumno') {
      this.navCtrl.navigateForward('/alumno');
    } else {
      // Aquí podrías agregar una alerta o mensaje de error
      console.log('Credenciales incorrectas');
    }
  }
}
