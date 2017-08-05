import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        //set el token  si esta en local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                //ingreso exitoso si hay un tkoen jwt en la respuesta
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // guardar el username y el jwt token en local storage para mantener el usuario logeado entre refrescos
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true para indicar un ingreso exitoso
                    return true;
                } else {
                    // return false indicando un ingreso fallido
                    return false;
                }
            });
    }

    logout(): void {
        // borrar el token del usuario cuando el usuario realiza un logout 
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}