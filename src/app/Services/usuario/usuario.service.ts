import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Usuario from '../../../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //uri = "https://portfolio-backend-gyt8.onrender.com/usuario";
  uri = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  async login(email:any, password:any) {
    let user: any;
    await this.http.get(`${this.uri}/login/${email}/${password}`).toPromise()
        .then(data => {
            user = data;
        });
    return user;
  }

}
