import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'firebase';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('alerta').valueChanges();
   this.items.subscribe(res=>{
    console.log(res)
   })

  }

  ngOnInit(): void {
  }

}
