import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  mostrarContenido = false;

  async ngOnInit(){
    if (localStorage.getItem("active") === "mostrar") {
      this.mostrarContenido = true  
    }
   }
}
