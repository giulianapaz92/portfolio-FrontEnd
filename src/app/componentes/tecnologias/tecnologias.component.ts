import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TecnologiaService } from 'src/app/Services/tecnologia/tecnologia.service';
import Tecnologia from 'src/model/Tecnologia';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {

    mostrarContenido = false;
    mostrarForm = false;
    idTecnologia = 0;

    tecnologias: Tecnologia[] = [];
    constructor(
      private ts: TecnologiaService
    ) {}

    tecForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      nivel: new FormControl('', Validators.required),
      })
  

   async ngOnInit(){ 
    this.tecnologias = await this.ts.getTecnologias();
    console.log("Respuesta tecnologias: " + this.tecnologias)
    if (localStorage.getItem("active") === "mostrar") {
      this.mostrarContenido = true  
    }
   }

   eliminarTec(id: number){
      this.ts.eliminar(id);
      window.location.reload();
   }

   mostrarFormEditar(id: number){
    this.mostrarForm = true;
    this.idTecnologia = id;
   }

   ocultarFormEditar(){
    this.mostrarForm = false;
   }

   onSubmit(id: number){
    const nombre = this.tecForm.value.nombre;
    const nivel = this.tecForm.value.nivel;
    this.ts.editar(id, nombre, nivel)
    window.location.reload();
  }

}
