import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  uri = "http://localhost:8080/experiencia";

  constructor(private http: HttpClient) { }

  async eliminar(id:any) {
    let dataToReturn = "Eliminada";
    await this.http.delete(`${this.uri}/eliminar/${id}}`).toPromise()
        .then(data => {
           console.log("Experiencia eliminada con el id: " + id);
        });
    return dataToReturn;
  }

  async editar(id:any, empresa:any, fechaDesde:any, fechaHasta:any, puesto:any, descripcion:any) {
    let bodyExperiencia = {
        id: id,
        empresa: empresa,
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        puesto: puesto,
        descripcion: descripcion
    };
    await this.http.put(`${this.uri}/editar`, bodyExperiencia).toPromise()
        .then(data => {
          console.log("Experiencia editada: " + data);
        });
    return bodyExperiencia;
  }

  async getExperiencias() {
    let experiencias:any;
    await this.http.get(`${this.uri}/experiencias`).toPromise()
        .then(data => {
            console.log("Experiencias: " + data)
            experiencias = data;
        });
    return experiencias;
  }

}
