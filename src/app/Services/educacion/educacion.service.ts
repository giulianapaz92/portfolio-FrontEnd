import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  uri = "http://localhost:8080/educacion";

  constructor(private http: HttpClient) { }

  async eliminar(id:any) {
    let dataToReturn = "Eliminada";
    await this.http.delete(`${this.uri}/eliminar/${id}}`).toPromise()
        .then(data => {
           console.log("Educacion eliminada con el id: " + id);
        });
    return dataToReturn;
  }

  async editar(id:any, nombre:any, estado:any, fechaDesde:any, fechaHasta:any, titulo:any) {
    let bodyEstudio = {
        id: id,
        nombre: nombre,
        estado: estado,
        fechaDesde: fechaDesde,
        fechaHasta: fechaHasta,
        titulo: titulo,
    };
    await this.http.put(`${this.uri}/editar`, bodyEstudio).toPromise()
        .then(data => {
          console.log("Estudio editado: " + data);
        });
    return bodyEstudio;
  }

  async getEstudios() {
    let estudios:any;
    await this.http.get(`${this.uri}/estudios`).toPromise()
        .then(data => {
            console.log("Estudios: " + data)
            estudios = data;
        });
    return estudios;
  }
}
