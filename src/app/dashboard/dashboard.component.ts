import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Alert } from '../class/alert';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageActual: number = 1;
  filtroBusqueda = '';
  title = 'firebase';
  items: any[] = [];
  constructor(private db: AngularFireDatabase, private alertService: AlertService, ) {
    /*  Obtener alertas por estado true */
    db.list('alerta', ref => ref.orderByChild('estado').equalTo(true)).snapshotChanges().subscribe(res => {
      this.items = [];
      res.map(res => {
        var item = res.payload.val()
        item['key'] = res.key;
        this.items.push(item);
      })
    })
  }

  ngOnInit(): void {
  }
  /* confrima y elimina alerta  */
  cambiarEstadoAlerta(id, estado: boolean, titulo: string) {
    var confirmacion = confirm("Desea eliminar Alerta " + titulo)
    if (confirmacion) {
      const itemRef = this.db.object('alerta/' + id);
      itemRef.valueChanges().subscribe((res: Alert) => {
        this.alertService.cambiarEstadoAlertaService(itemRef, res, estado)
      })
    } else { }
  }


  ordenarLista(opcion: string) {
    switch (opcion) {
      //Ordenar por titulo asedente
      case "1":
        alert(opcion)
        this.items.sort(function (a, b) {
          if (a.titulo > b.titulo) {
            return 1;
          }
          if (a.titulo < b.titulo) {
            return -1;
          }
          return 0;
        });
        break;
      //Ordenar por fecha creación descndente
      case "2":
        this.items.sort(function (a, b) {
          if (a.fecha_creacion > b.fecha_creacion) {
            return 1;
          }
          if (a.fecha_creacion < b.fecha_creacion) {
            return -1;
          }
          return 0;
        });
        break;
      //Ordenar por fecha actualización descndente
      case "3":
        this.items.sort(function (a, b) {
          if (a.fecha_actualizacion > b.fecha_actualizacion) {
            return 1;
          }
          if (a.fecha_actualizacion < b.fecha_actualizacion) {
            return -1;
          }
          return 0;
        });
        break;

      default:
        break;
    }
  }

}
