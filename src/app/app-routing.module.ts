import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';



const routes: Routes = [  
  {path: 'login',  component: LoginComponent},
  { path: '', component: DashboardComponent, canActivate: [] },
  { path: 'alerta', component: AlertComponent, canActivate: []},
  { path: 'alerta/:id', component: AlertComponent, canActivate: [] },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
