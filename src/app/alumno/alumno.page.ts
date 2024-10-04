import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  scanQR() {
    console.log('Escanear QR');
    // Aquí va la lógica para escanear el QR
  }

  markAttendance() {
    console.log('Redirigiendo a asistencia');
    this.navCtrl.navigateForward('/asistencia');
  }
}
