import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Alert } from '../class/alert';



@Injectable({
  providedIn: 'root'
})
export class AlertService {


  private terminoCondiciones = "https://docs.google.com/forms/d/e/1FAIpQLSdW_e4Exj94g8YIAcFv5IXrUl4Sa7zJRnEzqykWgmY4qBTYaQ/viewform"
  private dbPath = '/alerta';

  alertLits: AngularFireList<Alert> = null;

  constructor(private db: AngularFireDatabase) {
    this.alertLits = db.list(this.dbPath);
  }

  crearAlertaService(alerta: Alert): void {
    alerta.fecha_creacion = this.obtenerFecha();
    alerta.pagina= this.terminoCondiciones;
    alerta.estado = true;
    this.alertLits.push(alerta);
  }

  modificarAlertaService(item, alerta: Alert): void {
    alerta.fecha_actualizacion = this.obtenerFecha();
    this.alertLits.update(item, alerta);
  }
  cambiarEstadoAlertaService(item, alerta: Alert, estado: boolean) {
    alerta.fecha_actualizacion = this.obtenerFecha();
    alerta.estado = estado;

    this.alertLits.update(item, alerta);
  }

  obtenerFecha() {
    var d = new Date();
    d = new Date(d.getTime() - 3000000);
    var date_format_str = d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + (((d.getMinutes() / 5) * 5).toString().length == 2 ? ((d.getMinutes() / 5) * 5).toString() : "0" + ((d.getMinutes() / 5) * 5).toString()) + ":00";
    return date_format_str;
  }

}
