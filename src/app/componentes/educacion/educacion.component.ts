import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/Services/educacion/educacion.service';
import Educacion from 'src/model/Educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent {
    
  mostrarContenido = false;
  mostrarForm = false;
  idEducacion = 0;
  validacion = false;

  estudios: Educacion[] = [];
  constructor(
    private es: EducacionService
  ) {}

  eduForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    fechaDesde: new FormControl('', Validators.required),
    fechaHasta: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    })


 async ngOnInit(){ 
  this.estudios = await this.es.getEstudios();
  console.log("Respuesta estudios: " + this.estudios)
  if (localStorage.getItem("active") === "mostrar") {
    this.mostrarContenido = true  
  }
 }

  async eliminarEst(id: number){
    await this.es.eliminar(id)
    window.location.reload();
  }

  mostrarFormEditar(id: number){
    this.mostrarForm = true
    this.idEducacion = id;
  }

  ocultarFormEditar(){
    this.mostrarForm = false
    this.validacion = false;
  }

  mostrarFormAgregar(){
    this.mostrarForm = true;
  }

  async onSubmit(id: number){
    const nombre = this.eduForm.value.nombre;
    const estado = this.eduForm.value.estado;
    const fechaDesde = this.eduForm.value.fechaDesde;
    const fechaHasta = this.eduForm.value.fechaHasta;
    const titulo = this.eduForm.value.titulo;

    if(nombre === "" || fechaDesde === "" || fechaHasta === "" || estado === "" || titulo === ""){
      this.validacion = true;
      return;
    }
    await this.es.editar(id, nombre, estado, fechaDesde, fechaHasta, titulo)
    window.location.reload();

    await this.es.agregar(nombre, estado, fechaDesde, fechaHasta, titulo)
    window.location.reload();
    
  }


}
