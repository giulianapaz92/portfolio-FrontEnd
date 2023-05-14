import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  uri = "https://portfolio-backend-gyt8.onrender.com/tecnologia";
  //uri = "http://localhost:8080/tecnologia";

  constructor(private http: HttpClient) { }

  async eliminar(id:any) {
    let dataToReturn = "Eliminada";
    await this.http.delete(`${this.uri}/eliminar/${id}`).toPromise()
        .then(data => {
           console.log("Tecnologia eliminada con el id: " + id);
        });
    return dataToReturn;
  }

  async editar(id:any, nombre:any, nivel:any) {
    let bodyTecnologia = {
        id: id,
        nombre: nombre,
        nivel: nivel
    };
    await this.http.put(`${this.uri}/editar`, bodyTecnologia).toPromise()
        .then(data => {
          console.log("Tecnologia editada: " + data);
        });
    return bodyTecnologia;
  }

  async getTecnologias() {
    let tecnologias:any;
    await this.http.get(`${this.uri}/tecnologias`).toPromise()
        .then(data => {
            tecnologias = data;
        });
    return tecnologias;
  }

}
