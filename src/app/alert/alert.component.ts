import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { AlertService } from './alert.service';
import { Alert } from '../class/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  title = 'firebase';

  alerta: Alert = new Alert();


  enviado = false;

  constructor(private alertService: AlertService ) {    
    console.log(this.alerta);
  }

  ngOnInit(): void {
  }

  nuevaAlerta(): void {
    this.enviado = false;
    this.alerta = new Alert();
  }
 
  guardarAlerta() {
    this.alertService.crearAlertaService(this.alerta);
    this.alerta = new Alert();
  }
 
  onSubmit() {
    this.enviado = true;
    this.guardarAlerta();
  }
}
