import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { AlertService } from './alert.service';
import { Alert } from '../class/alert';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  title = 'firebase';

  alerta: Alert = new Alert();
  id = ''


  enviado = false;

  constructor(private alertService: AlertService, private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      const itemRef = db.object('alerta/' + this.id);
      itemRef.valueChanges().subscribe((res: Alert) => {
        this.alerta = res;
        console.log(res)
      })

    }

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

  modificarAlerta() {
    const itemRef = this.db.object('alerta/' + this.id);
    this.alertService.modificarAlertaService(itemRef, this.alerta);
    this.alerta = new Alert();
  }

  onSubmit() {
    this.enviado = true;
    if (this.id != '') {
      this.modificarAlerta();
    } else {
      this.guardarAlerta();
    }

  }
}
