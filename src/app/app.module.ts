import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BuscarPipe } from './pipe/buscar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    BuscarPipe   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule










    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
