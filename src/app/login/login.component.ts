import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { Usuario } from '../class/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  usuario: Usuario = { username: '0605722404', password: 'gonzol0605722404' };

  constructor(
    private api: ServicesService,
    public router: Router
    ) { }

  onlogin() {
    this.api.post('login', this.usuario).subscribe((res:any) => {
  
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      localStorage.setItem('token', res.token);
      this.router.navigate([""]);
    })
  }


}
