import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

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
  constructor(db: AngularFireDatabase) {
    db.list('alerta').snapshotChanges().subscribe(res => {
      res.map(res => {
        var item = res.payload.val()
        item['key'] = res.key;
        this.items.push(item);
      })
    })
  }

  ngOnInit(): void {
  }

}
