import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/Services/proyecto/proyecto.service';
import Proyecto from 'src/model/Proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

  mostrarContenido = false;

  proyectos: Proyecto[] = [];
  constructor(
    private ps: ProyectoService
  ) {}


 async ngOnInit(){ 
  this.proyectos = await this.ps.getProyectos();
  console.log("Respuesta proyectos: " + this.proyectos)
  if (localStorage.getItem("active") === "mostrar") {
    this.mostrarContenido = true  
  }
 }
}
