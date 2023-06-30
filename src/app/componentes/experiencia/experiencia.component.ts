import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/Services/experiencia/experiencia.service';
import Experiencia from 'src/model/Experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})

export class ExperienciaComponent {

  mostrarContenido = false;
  mostrarForm = false;
  idExperiencia = 0;
  validacion = false;

  experiencias: Experiencia[] = [];
  constructor(
    private xs: ExperienciaService
  ) {}

  expForm = new FormGroup({
    empresa: new FormControl('', Validators.required),
    fechaDesde: new FormControl('', Validators.required),
    fechaHasta: new FormControl('', Validators.required),
    puesto: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    })


 async ngOnInit(){ 
  this.experiencias = await this.xs.getExperiencias();
  console.log("Respuesta experiencias: " + this.experiencias)
  if (localStorage.getItem("active") === "mostrar") {
    this.mostrarContenido = true  
  }
 }

  async eliminarExp(id: number){
    await this.xs.eliminar(id)
    window.location.reload();
  }
  
  mostrarFormEditar(id: number){
    this.mostrarForm = true;
    console.log(id)
    this.idExperiencia = id;
  }

  ocultarFormEditar(){
    this.mostrarForm = false;
    this.validacion = false;
  }

  mostrarFormAgregar(){
    this.mostrarForm = true;
  }

  onSubmit(id: number){
    const empresa = this.expForm.value.empresa;
    const fechaDesde = this.expForm.value.fechaDesde;
    const fechaHasta = this.expForm.value.fechaHasta;
    const puesto = this.expForm.value.puesto;
    const descripcion = this.expForm.value.descripcion;

    if(empresa === "" || fechaDesde === "" || fechaHasta === "" || puesto === "" || descripcion === ""){
      this.validacion = true;
      return;
    }
    this.xs.editar(id, empresa, fechaDesde, fechaHasta, puesto, descripcion)
    window.location.reload();

    this.xs.agregar(empresa, fechaDesde, fechaHasta, puesto, descripcion)
    window.location.reload();

  }

}
