import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //uri = "https://portfolio-backend-gyt8.onrender.com/proyecto";
  uri = "http://localhost:8080/proyecto";

  constructor(private http: HttpClient) { }

  async eliminar(id:any) {
    let dataToReturn = "Eliminada";
    await this.http.delete(`${this.uri}/eliminar/${id}}`).toPromise()
        .then(data => {
           console.log("Proyecto eliminado con el id: " + id);
        });
    return dataToReturn;
  }

  async editar(id:any, nombre:any, descripcion:any) {
    let bodyProyecto = {
        id: id,
        nombre: nombre,
        descripcion: descripcion
    };
    await this.http.put(`${this.uri}/editar`, bodyProyecto).toPromise()
        .then(data => {
          console.log("Proyecto editado: " + data);
        });
    return bodyProyecto;
  }

  async getProyectos() {
    let proyectos:any;
    await this.http.get(`${this.uri}/proyectos`).toPromise()
        .then(data => {
            console.log("Proyectos: " + data)
            proyectos = data;
        });
    return proyectos;
  }

}
