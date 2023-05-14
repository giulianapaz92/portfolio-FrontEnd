import { Component, Output } from '@angular/core';
import { TecnologiaService } from 'src/app/Services/tecnologia/tecnologia.service';
import Tecnologia from 'src/model/Tecnologia';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent {

    mostrarContenido = false;

    tecnologias: Tecnologia[] = [];
    constructor(
      private ts: TecnologiaService
    ) {}


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

}
