import { Component } from '@angular/core';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.scss']
})
export class AcercademiComponent {

  mostrarContenido = false;
  
  async ngOnInit(){
    if (localStorage.getItem("active") === "mostrar") {
      this.mostrarContenido = true  
    }
   }
}
