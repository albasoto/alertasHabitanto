import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Alert} from '../class/alert';



@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private dbPath = '/alerta';
 
  alertLits: AngularFireList<Alert> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.alertLits = db.list(this.dbPath);
  }
 
  crearAlertaService(alerta: Alert): void {
    this.alertLits.push(alerta);
  }
}
