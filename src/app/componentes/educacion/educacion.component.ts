import { Component } from '@angular/core';
import { EducacionService } from 'src/app/Services/educacion/educacion.service';
import Educacion from 'src/model/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent {
    
  estudios: Educacion[] = [];
  constructor(
    private es: EducacionService
  ) {}


 async ngOnInit(){ 
  this.estudios = await this.es.getEstudios();
  console.log("Respuesta estudios: " + this.estudios)
 }

}
