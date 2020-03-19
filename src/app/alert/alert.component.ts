import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';
import { AlertService } from './alert.service';
import { Alert } from '../class/alert';
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  title = 'firebase';
  enviado = false;
  alerta: Alert = new Alert();
  id = '';

  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  uploadURLString: string = '';  

  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    public router: Router,
    private storage: AngularFireStorage) {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id) {
      const itemRef = db.object('alerta/' + this.id);
      itemRef.valueChanges().subscribe((res: Alert) => {
        this.alerta = res;

      })
    }
  }

  ngOnInit(): void {
  }


  nuevaAlerta(): void {
    this.enviado = false;

  }

  guardarAlerta() {
    // enviar URL en el campo imagen
    this.alerta.imagen = this.uploadURLString;

    this.alertService.crearAlertaService(this.alerta);
    this.alerta = new Alert();
  }

  modificarAlerta() {
    const itemRef = this.db.object('alerta/' + this.id);
    this.alertService.modificarAlertaService(itemRef, this.alerta);
    this.alerta = new Alert();
  }

  //ejecuta al presionar botón Guardar
  onSubmit() {
    this.enviado = true;
    !this.id ? this.guardarAlerta() : this.modificarAlerta();
    this.router.navigate(['']);
  }
  upload(event) {
    const file = event.target.files[0];
    // Generar ID random 
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `images/${randomId}`;
    const fileRef = this.storage.ref(filepath);
    // Upload Image
    const task = this.storage.upload(filepath, file);
    // porcentaje de subida
    this.uploadProgress = task.percentageChanges();
    // Obtener URL de imagen de Firestore
    task.snapshotChanges().pipe(
      finalize(() => {
        this.uploadURL = fileRef.getDownloadURL()
        this.uploadURL.subscribe(res => {
          this.uploadURLString = res;
        })
      })
    ).subscribe();
  }

}
