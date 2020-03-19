import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class isLoggedInGuard implements CanActivate {
    constructor(private router: Router, private jwtHelper: JwtHelperService, ) { }

    canActivate() {

        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
            return false
        }

        const token = localStorage.getItem('token')

        if (!this.jwtHelper.isTokenExpired(token)) {
    
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }


    }
}