import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/Services/experiencia/experiencia.service';
import Experiencia from 'src/model/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})

export class ExperienciaComponent {

  mostrarContenido = false;

  experiencias: Experiencia[] = [];
  constructor(
    private xs: ExperienciaService
  ) {}


 async ngOnInit(){ 
  this.experiencias = await this.xs.getExperiencias();
  console.log("Respuesta experiencias: " + this.experiencias)
  if (localStorage.getItem("active") === "mostrar") {
    this.mostrarContenido = true  
  }
 }

  eliminarExp(id: number){
    this.xs.eliminar(id)
    window.location.reload();
  }
  

}
