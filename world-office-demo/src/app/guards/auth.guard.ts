import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in entonces return true
            return true;
        }

        // no logged in redirigir a pagina login
        this.router.navigate(['/login']);
        return false;
    }
}